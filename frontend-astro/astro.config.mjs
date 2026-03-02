import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [],
  },
  integrations: [
    // 👇 update these lines
    sanity({
      projectId: "xgztagdf",
      dataset: "production",
      useCdn: false, // for static builds
    }),
  ],
});
