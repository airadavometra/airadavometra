import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // <Icon name="set:icon" /> inlines icons from the installed @iconify-json/*
  // packs at build time; an unknown name fails the build.
  integrations: [icon()],
  // The production address, used for the canonical URL and og:url. Vercel
  // redirects the version without www here.
  site: "https://www.airadavometra.space",
  build: {
    // The site's CSS is ~5 KB: inlining it saves a render-blocking request.
    inlineStylesheets: "always",
  },
});
