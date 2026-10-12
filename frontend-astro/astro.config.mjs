import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // The production address, used for the canonical URL and og:url. Vercel
  // redirects the version without www here.
  site: "https://www.airadavometra.space",
  build: {
    // The site's CSS is ~5 KB: inlining it saves a render-blocking request.
    inlineStylesheets: "always",
  },
});
