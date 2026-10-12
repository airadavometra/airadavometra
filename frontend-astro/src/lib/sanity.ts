import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: "wvlqa5od",
  dataset: "production",
  // The site is static: fetch from the live API at build time so a rebuild
  // right after publishing never picks up stale CDN-cached content.
  useCdn: false,
  apiVersion: "2024-03-02",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
