# airadavometra portfolio

Daria Artemova's one-page portfolio. All copy and images live in the repo; the site is a static Astro build on Vercel.

## Layout

- `frontend-astro/`: Astro 5 site, npm. One page (`src/pages/index.astro`) built from section components in `src/components/`.
  - `src/data/`: the content, as typed TypeScript modules.
  - `src/assets/`: the images, skill icons and CV that the content imports.

## Commands

Frontend (run in `frontend-astro/`):

- `npm run dev`: dev server on http://localhost:4321
- `npm run build`: `astro check` (types) then `astro build`. Vercel runs this, so type errors fail the deploy.
- `npm run preview`: serve the built `dist/` on :4321
- `npm run format` / `npm run format:check`: Prettier with `prettier-plugin-astro`
- `npm run screenshot -- --out <dir>`, `npm run a11y`, `node scripts/diff.mjs <a> <b>`: see the `verify-ui` skill

## Content

Content lives in `src/data/`, one module per area. `index.astro` imports it and passes typed props down; only `Layout.astro` imports `settings` itself.

| Module        | Holds                                                                                |
| ------------- | ------------------------------------------------------------------------------------ |
| `settings.ts` | `<head>`: tab title, meta description, favicon, link-preview image (1200×630)        |
| `home.ts`     | Page title ("Name — Role"), hero, About, CV, experience, profile links, email, Contact |
| `skills.ts`   | Skill names and their icons                                                          |
| `projects.ts` | Pet projects; the first screenshot is the cover                                      |
| `manga.ts`    | Manga strips, each with four panels and their alt text                               |

- Files go in `src/assets/` and are imported statically, so a missing or misspelled file fails the build.
  - Images: commit the PNG/JPG original. Astro generates the resized AVIF/WebP at build time.
  - Skill icons: single-colour SVGs imported as Astro SVG components; CSS fills them with the brand blue.
  - CV: `daria-artemova-cv.pdf`, imported with `?url`, so its URL is hashed and changes with each new version.
- Multi-paragraph text is a `string[]`, one string per paragraph.
- Manga strips are placed in `index.astro` between sections: after About, after Experience & skills, and optionally a third after Pet projects.
- Keep content (copy, links, images) in `src/data/`. Components hold only interface text such as nav labels and button text.
- A content change goes live with the next deploy, which Vercel runs on every push to `main`.

## Conventions

- Astro components with a scoped `<style>` block; site-wide tokens, resets and utilities live in `src/styles/global.css`. Follow the `css` skill for any styling work.
- Interactivity is a plain `<script>` in the component. No React or other UI-framework islands.
- Raster images always go through `<ResponsiveImage>` (`src/components/ResponsiveImage.astro`), never a bare `<img>` or Astro's `<Image>`. It renders AVIF with a WebP fallback, a `srcset` from the given `widths` plus the image's own width, and intrinsic `width`/`height`.
  - Pass `sizes` matching the image's real rendered width.
  - The hero (the LCP element) gets `priority`, which sets `fetchpriority="high"`; every other image lazy-loads by default.
  - The `<picture>` wrapper is `display: contents` (`global.css`), so style the image through the `class` you pass, which lands on the `<img>`.
- The font is Open Sans Variable, self-hosted through `@fontsource-variable/open-sans` and imported in `Layout.astro`, which also preloads the Latin file. Don't add Google Fonts links.
- Static assets in `public/` stay small: prefer WebP (the ink texture is lossless WebP). Content files belong in `src/assets/`, not `public/`, so Astro optimises and hashes them. CSS is inlined into the HTML (`build.inlineStylesheets: "always"`).
- Icons are `.astro` SVG components in `src/components/icons/`, using `fill="currentColor"` and `aria-hidden="true"`. Skill icons are plain SVG files in `src/assets/skills/`, rendered with `aria-hidden="true"`.
- Analytics is Vercel Web Analytics. To track a click, add `data-track="event_name"` and optional `data-track-<prop>="value"` to the element; a single listener in `src/lib/analytics.ts` sends it. Never send visitor data.
- The design is light-only on purpose: two full-page texture overlays (`body::before`/`::after`) multiply over everything.

## Definition of done

1. `npm run build` passes in `frontend-astro/`.
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
- Astro copies HTML comments (`<!-- -->`) in a template into the page, once per render. Use `{/* */}` or a frontmatter comment for notes about the code.
- Everything in `src/assets/` is public twice: on the site and in this public repo's history. Deleting a file later doesn't remove it from history, so only add what's meant to be published.
