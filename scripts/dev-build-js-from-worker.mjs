import { fileURLToPath } from "url";
import { Worker, isMainThread, parentPort } from "worker_threads";
import { resetTsPlugin } from "./dev-build-js.mjs";

let jobs = [];
let idCounter = 0;
let worker;

const startWorker = () => {
  // This re-loads the current file inside a Worker instance.
  worker = new Worker(new URL(import.meta.url));
  worker.on("message", ({ id, result, error }) => {
    worker.unref();
    if (error) {
      jobs[id].reject(error);
    } else {
      jobs[id].resolve(result);
    }
  });
  worker.on("error", (error) => {
    jobs.forEach(({ reject }) => reject(error));
    worker.terminate();
    worker = null;
  });
};

const getWorker = (keepAlive = false) => {
  if (worker == null) {
    startWorker();
    if (!worker.keepAlive) {
      worker.unref();
    }
  } else if (keepAlive) {
    worker.ref();
  }
  return worker;
};

if (isMainThread) {
  startWorker();
} else {
  // let buildCache;
  // const build = () =>
  //   (buildCache = import("./dev-build-js.mjs")
  //     .then((m) => m.default())
  //     .then((result) => ({ result }))
  //     .catch((error) => ({ error })));
  // buildCache = import("./dev-generate-toml-interop-files.mjs").then(build);
  parentPort.on("message", ({ id, rebuild, urlOrPath }) => {
    // if ("string" === typeof rebuild && rebuild.endsWith(".toml")) {
    //   buildCache = Promise.allSettled([
    //     import("./dev-generate-toml-interop-files.mjs").then((module) =>
    //       module.createInteropFilesFromTOMLFile(rebuild)
    //     ),
    //   ]).then(build);
    // } else if (rebuild) {
    //   build();
    // } else {
    //   buildCache.then((cache) => parentPort.postMessage({ id, ...cache }));
    // }
    if (rebuild?.endsWith?.(".tsx")) {
      resetTsPlugin();
    } else if (rebuild?.endsWith?.(".toml")) {
      import("./dev-generate-toml-interop-files.mjs")
        .then((module) => module.createInteropFilesFromTOMLFile(rebuild))
        .then(console.log);
    }
    if (urlOrPath != null)
      import("./dev-build-js.mjs")
        .then((module) => module.default(urlOrPath))
        .then((result) => ({ result }))
        .catch((error) => ({ error }))
        .then((cache) => parentPort.postMessage({ id, ...cache }));
  });
}

export function sendRebuildSignal(fileName) {
  getWorker().postMessage({ rebuild: fileName });
}

export default (urlOrPath) =>
  new Promise((resolve, reject) => {
    const id = idCounter++;
    jobs[id] = { resolve, reject };
    if (typeof urlOrPath !== "string") urlOrPath = fileURLToPath(urlOrPath);
    getWorker(true).postMessage({ id, urlOrPath });
  });
