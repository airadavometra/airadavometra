import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "./sanity";

type SanityImage = {
  asset?: { _ref: string };
  crop?: { top?: number; bottom?: number; left?: number; right?: number };
};

interface Options {
  /** Candidate widths in px. The image's own width is always included and nothing wider is requested. */
  widths: number[];
  /** The `sizes` attribute: how wide the image is rendered at each breakpoint. */
  sizes: string;
  quality?: number;
}

/**
 * Responsive `<img>` attributes for a Sanity image: resized, served as
 * WebP/AVIF where supported, with intrinsic `width`/`height` so the browser
 * reserves space before it loads (no layout shift). Spread onto an `<img>`.
 */
export function sanityImage(
  image: SanityImage,
  { widths, sizes, quality = 80 }: Options,
) {
  // Asset refs look like `image-<hash>-1200x630-png`
  const [, assetWidth = 0, assetHeight = 0] =
    image.asset?._ref.match(/-(\d+)x(\d+)-/)?.map(Number) ?? [];
  const crop = image.crop ?? {};
  const width = Math.round(
    assetWidth * (1 - (crop.left ?? 0) - (crop.right ?? 0)),
  );
  const height = Math.round(
    assetHeight * (1 - (crop.top ?? 0) - (crop.bottom ?? 0)),
  );

  const candidates = [
    ...new Set([...widths.filter((w) => w < width), width]),
  ].sort((a, b) => a - b);
  const url = (w: number) =>
    urlFor(image as SanityImageSource)
      .width(w)
      .fit("max")
      .auto("format")
      .quality(quality)
      .url();

  return {
    src: url(candidates[candidates.length - 1]),
    srcset: candidates.map((w) => `${url(w)} ${w}w`).join(", "),
    sizes,
    width,
    height,
  };
}
