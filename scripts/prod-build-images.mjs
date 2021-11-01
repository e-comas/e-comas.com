import fs from "node:fs/promises";
import path from "node:path";
import buildAnimatedImage from "./prod-build-animated-images.mjs";

import { svgo } from "./prod-build-svg.mjs";

import { INPUT_DIR, OUTPUT_DIR } from "./prod-config.mjs";
import createHash from "./prod-hash.mjs";
import CacheMap from "./prod-image-cache.mjs";

const vectorCache = Object.create(null);
export async function optimizeVector(url) {
  console.log("vector", url);
  url = new URL(url, INPUT_DIR);

  if (url.pathname in vectorCache) return vectorCache[url.pathname];

  const ext = path.extname(url.pathname);

  switch (ext) {
    case ".svg":
      let resolve;
      vectorCache[url.pathname] = new Promise((r) => {
        resolve = r;
      });
      const fileContent = await svgo(await fs.readFile(url, "utf8"));
      const hash = createHash(fileContent);
      const fileName = `${hash}.svg`;
      try {
        await fs.writeFile(new URL(fileName, OUTPUT_DIR), fileContent);
      } catch (err) {
        const ret = Promise.reject(err);
        resolve(ret);
        return ret;
      }
      resolve(fileName);
      vectorCache[url.pathname] = fileName;
      return fileName;

    default:
      throw new Error("unsupported vector extension: " + JSON.stringify(ext));
  }
}

const encodeOptionsJPEG = {
  avif: { cqLevel: 63 - 45, speed: 10 - 7, sharpness: 7 },
  mozjpeg: {
    quality: 95,
  },
  webp: { quality: 90, method: 6 },
};
const encodeOptionsPNG = {
  avif: { cqLevel: 63 - 60, subsample: 3, cqAlphaLevel: -1 },
  oxipng: { level: 3 },
  webp: { lossless: 1, nearLossless: 75 },
};
const encodeOptionsOpenGraph = {
  oxipng: encodeOptionsPNG.oxipng,
};
const encodeOptionsGIF = {
  webp: {
    vcodec: "libwebp",
    lossless: 1,
    "filter:v": "fps=fps=20",
    loop: 0,
    an: undefined, // disables audio
    preset: "drawing",
    vsync: 0,
    f: "webp",
  },
  gif: {
    loop: 0,
    an: undefined, // disables audio
    vsync: 0,
    f: "gif",
  },
};

const codecOptionsHashesCache = new Map();
const getCodecOptionHash = (codec, options) => {
  const cachedValue = codecOptionsHashesCache.get(options);
  if (cachedValue != null) return cachedValue;

  const valueToCache = createHash(
    JSON.stringify({ [codec]: options }),
    "base64"
  );
  codecOptionsHashesCache.set(options, valueToCache);
  return valueToCache;
};

const getImagePool = (async function* generateImagePool() {
  let imagePool, closeImagePool;
  // Lazy-load libSquoosh as it registers globals clashing with other packages.
  // @see https://github.com/GoogleChromeLabs/squoosh/issues/1152
  const squoosh = await import("@squoosh/lib");
  do {
    const imagePoolClosing = new Promise((resolve) => {
      closeImagePool = resolve;
    }).then(() => imagePool?.close());
    yield {
      get imagePool() {
        return (imagePool = new squoosh.ImagePool());
      },
      closeImagePool,
    };
    await imagePoolClosing;
  } while (1);
})();

let imageCache;
export async function optimizeMatrix(src, sizes) {
  console.log("matrix", src, sizes);
  const {
    value: { imagePool, closeImagePool },
  } = await getImagePool.next();
  const url = new URL(src, INPUT_DIR);
  let encodeOpts, originalCodec;
  switch (url.hash) {
    case "#lossless":
      encodeOpts = encodeOptionsPNG;
      originalCodec = "oxipng";
      break;
    case "#animated":
      encodeOpts = encodeOptionsGIF;
      originalCodec = "gif";
      break;
    case "#opengraph":
      encodeOpts = encodeOptionsOpenGraph;
      originalCodec = "oxipng";
      break;
    default:
      encodeOpts = encodeOptionsJPEG;
      originalCodec = "mozjpeg";
      break;
  }

  const fileContent = await fs.readFile(url).catch((err) => {
    err.cause = url;
    throw err;
  });
  const fileHash = createHash(fileContent, "base64");
  const image =
    originalCodec === "gif"
      ? { decoded: { bitmap: { width: 1200, height: 698 } } }
      : imagePool.ingestImage(fileContent);

  const {
    bitmap: { width: originalWidth, height },
  } = await image.decoded;

  imageCache ??= new CacheMap(new URL("./_cache.csv", OUTPUT_DIR));
  const sources = [];
  let previousWidth;
  for (const width of Array.from(sizes).sort((a, b) => b - a)) {
    if (width == 0 || Number.isNaN(width)) continue;
    if (previousWidth - width < 20) {
      console.log("too close from previous size, skipping", src, width);
    }
    previousWidth = width;

    let encodeOptions;
    const cacheWidth = Math.min(originalWidth, width);
    const cacheEntries = await imageCache.get(fileHash, cacheWidth);
    if (cacheEntries != null) {
      encodeOptions = { ...encodeOpts };
      const cacheCheck = await Promise.allSettled(
        Object.entries(encodeOptions).map(async ([codec, options]) => {
          const hash = getCodecOptionHash(codec, options);
          if (!Object.hasOwn(cacheEntries, hash)) {
            throw "no cache entry for " + hash;
          }
          const fileName = cacheEntries[hash];
          await fs.access(new URL(fileName, OUTPUT_DIR));
          delete encodeOptions[codec];
          sources.push({ src, codec, fileName, width });
        })
      );
      if (cacheCheck.some((p) => p.status === "rejected")) {
        console.log(
          "missing at least one cache entry",
          src,
          width,
          Object.keys(encodeOptions)
        );
      } else {
        console.log("found in cache, skipping", src, width);
        continue;
      }
    } else {
      encodeOptions = encodeOpts;
    }

    if (originalCodec === "gif") {
      url.hash = "";
      for (const [extension, options] of Object.entries(encodeOptions)) {
        const fileName = await buildAnimatedImage(
          url,
          extension,
          cacheWidth,
          options
        );
        sources.push({ src, codec: extension, fileName, width });
        imageCache.set(
          fileHash,
          cacheWidth,
          getCodecOptionHash(extension, options),
          fileName
        );
      }
      continue;
    }

    await image.preprocess(
      width < originalWidth
        ? {
            resize: {
              enabled: true,
              width,
            },
          }
        : {}
    );

    await image.encode(encodeOptions);

    for (const [codec, encodedImage] of Object.entries(image.encodedWith)) {
      const { binary, extension } = await encodedImage;
      const hash = createHash(binary);
      const fileName = `${hash}.${extension}`;
      await fs.writeFile(new URL(fileName, OUTPUT_DIR), binary);

      console.log("converted", src, codec, width);

      sources.push({ src, codec, fileName, width });
      imageCache
        .set(
          fileHash,
          cacheWidth,
          getCodecOptionHash(codec, encodeOptions[codec]),
          fileName
        )
        .catch(console.error);
    }
  }

  closeImagePool();

  return { sources, originalCodec, width: originalWidth, height };
}

const toSrcset = (data, codec, leadingSlash) =>
  data
    .filter((job) => job.codec === codec)
    .map((job) => `${leadingSlash}${job.fileName} ${job.width}w`)
    .join(",");

const toSrc = (data, codec, leadingSlash) => {
  const extData = data.filter((job) => job.codec === codec);
  return (
    leadingSlash +
    extData.find(
      (job) => job.width === Math.max(...extData.map((job) => job.width))
    ).fileName
  );
};

export async function generatePictureInnerHTML(
  src,
  alt,
  aboveTheFold,
  jobs,
  leadingSlash
) {
  const { sources, originalCodec, width, height } = await jobs[src];

  return (
    (originalCodec === "gif"
      ? "" // FFmpeg doesn't support AVIF yet.
      : `<source type="image/avif" srcset="${toSrcset(
          sources,
          "avif",
          leadingSlash
        )}"/>`) +
    `<source type="image/webp" srcset="${toSrcset(
      sources,
      "webp",
      leadingSlash
    )}"/>` +
    `<img alt=${JSON.stringify(alt)} srcset="${toSrcset(
      sources,
      originalCodec,
      leadingSlash
    )}" src="${toSrc(sources, originalCodec, leadingSlash)}" loading="${
      aboveTheFold ? "eager" : "lazy"
    }" width="${width}" height="${height}"/>`
  );
}

export async function generateOpenGraphInfo(src, alt, aboveTheFold, jobs) {
  const { sources, originalCodec, width, height } = await jobs[src];

  return sources[0];
}
