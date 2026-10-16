# Development

Daria Artemova's portfolio: a one-page site built with [Astro](https://astro.build) (npm), deployed to Vercel as a static build.

## Run it

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + static build into dist/
```

## How it fits together

- All content is in the repo: text in Markdown files under `src/content/` (schemas in `src/content.config.ts`), and images and the CV under `src/assets/`. Astro resizes the images to AVIF/WebP at build time.
- Icons come from icon packs (Phosphor, Simple Icons) through [astro-icon](https://github.com/natemoo-re/astro-icon).
- To change content, edit those files and push. Vercel rebuilds on every push to `main`.
- Analytics: Vercel Web Analytics. Clicks on elements with a `data-track` attribute are sent as custom events.

Working on this repo with Claude Code? Start with [`CLAUDE.md`](CLAUDE.md).
