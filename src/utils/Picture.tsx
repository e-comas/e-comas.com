import { h } from "@aduh95/async-jsx";

export interface PictureProps {
  class?: string;
  /** @deprecated */
  className?: string;
  src: string;
  alt: string;
  lossless?: boolean;
  children?: any[];
}

export default (props: PictureProps) => (
  // Using a div is necessary to workaround Safari interpretation of the spec
  // https://stackoverflow.com/questions/44770074/css-grid-row-height-safari-bug
  <div class={"picture-wrapper " + props.class}>
    <picture class={props.class || props.className}>
      <img
        src={`${props.src}${props.lossless ? "#lossless" : ""}`}
        alt={props.alt}
      />
    </picture>
  </div>
);
