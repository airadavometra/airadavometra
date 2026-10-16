# Development

Daria Artemova's portfolio: a one-page site built with [Astro](https://astro.build). The site lives in `frontend-astro/` (npm) and deploys to Vercel as a static build.

## Run it

```sh
cd frontend-astro
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + static build into dist/
```

## How it fits together

- All content is in the repo: text in typed modules under `frontend-astro/src/data/`, and images, skill icons and the CV under `frontend-astro/src/assets/`. Astro resizes the images to AVIF/WebP at build time.
- To change content, edit those files and push. Vercel rebuilds on every push to `main`.
- Analytics: Vercel Web Analytics. Clicks on elements with a `data-track` attribute are sent as custom events.

Working on this repo with Claude Code? Start with [`CLAUDE.md`](CLAUDE.md).
