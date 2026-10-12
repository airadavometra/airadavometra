import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  build: {
    // The site's CSS is ~5 KB: inlining it saves a render-blocking request.
    inlineStylesheets: "always",
  },
});
