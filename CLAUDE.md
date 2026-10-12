# airadavometra portfolio

Daria Artemova's one-page portfolio. All copy and images come from Sanity; the site is a static Astro build on Vercel.

## Layout

- `frontend-astro/`: Astro 5 site, npm. One page (`src/pages/index.astro`) built from section components in `src/components/`.
- `cms/`: Sanity Studio v5, yarn. Project `wvlqa5od`, dataset `production`. Schemas in `cms/schemaTypes/` (`homePage`, `settings`, `manga`).

## Commands

Frontend (run in `frontend-astro/`):

- `npm run dev`: dev server on http://localhost:4321
- `npm run build`: `astro check` (types) then `astro build`. Vercel runs this, so type errors fail the deploy.
- `npm run preview`: serve the built `dist/` on :4321
- `npm run format` / `npm run format:check`: Prettier with `prettier-plugin-astro`
- `npm run screenshot -- --out <dir>`, `npm run a11y`, `node scripts/diff.mjs <a> <b>`: see the `verify-ui` skill

CMS (run in `cms/`): `npm run dev` (Studio on :3333), `npm run deploy` (publish the Studio).

## How content gets to the page

Components fetch from Sanity at build time through `src/lib/sanity.ts` (`client`, `urlFor`). The output is static, so publishing in the Studio only shows up after a rebuild (Sanity webhook → Vercel deploy hook). Never hardcode copy that belongs in the CMS. To change a field end to end, follow the `sanity-content` skill.

`homePage.featuredManga1`–`3` are manga strips placed between sections (after About, after Experience & skills, after Pet projects). A slot can be empty, and then that strip doesn't render.

## Conventions

- Astro components with a scoped `<style>` block; site-wide tokens, resets and utilities live in `src/styles/global.css`. Follow the `css` skill for any styling work.
- Interactivity is a plain `<script>` in the component. No React or other UI-framework islands.
- Icons are `.astro` SVG components in `src/components/icons/`, using `fill="currentColor"`.
- The design is light-only on purpose: two full-page texture overlays (`body::before`/`::after`) multiply over everything.

## Definition of done

1. `npm run build` passes in `frontend-astro/` (and `npm run build` in `cms/` for schema changes).
2. Screenshots at 1440×900 and 390×844 look right: compared with the previous state, or with the design frame when implementing a design. See the `verify-ui` skill.
3. `npm run a11y` reports no new violations, and a keyboard pass works (visible focus, logical order, the mobile menu traps focus and closes on Esc).

## Git

Never run `git commit` or `git push`; the user reviews and commits everything. Finish a chunk of work with a short diff summary and a suggested commit message. Keep formatting-only changes separate from behaviour changes.

## Design handoff (Claude Design → code)

1. Design work happens in Claude Design, which syncs this repo. An export lands as an untracked folder at the repo root. Its `github.md` maps each frame to the repo files it changes.
2. Implement frame by frame, quoting the frame ID (for example "1k") in your summary.
3. Verify by screenshotting at the frame's viewport and comparing with the "after" frame.
4. Never commit an export: the repo is public, and uploads can contain personal screenshots. Delete the folder once the work is done and the user agrees.

## Gotchas

- Lighthouse reports accessibility 100 even with contrast failures, because axe can't see text through the overlays. Use `npm run a11y`, which hides them first.
- `html` has `scroll-behavior: smooth`. Scripts that scroll must pass `behavior: "instant"`, or screenshots catch the page mid-scroll.
- `/_vercel/insights/script.js` 404s locally. That's expected; it only exists on Vercel.
- `vercel.json` permanently redirects (308) every extensionless path to `/`. Switch it to `permanent: false` before adding any new route, because browsers cache 308s.
