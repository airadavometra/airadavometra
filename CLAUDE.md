# airadavometra portfolio

Daria Artemova's one-page portfolio. All copy and images live in the repo; the site is a static Astro build on Vercel.

## Layout

The repo root is the Astro 5 site (npm): one page (`src/pages/index.astro`) built from section components in `src/components/`.

- `src/content/`: the content, as Markdown files. Their schemas are in `src/content.config.ts`.
- `src/assets/`: the images the content points to, plus the favicon, link-preview image and CV.
- `src/icons/`: custom SVG icons for anything no icon pack has (empty for now).
- `scripts/`: screenshot, diff and accessibility tooling (see the `verify-ui` skill).

## Commands

Run from the repo root:

- `npm run dev`: dev server on http://localhost:4321
- `npm run build`: `astro check` (types) then `astro build`. Vercel runs this, so type errors fail the deploy.
- `npm run preview`: serve the built `dist/` on :4321
- `npm run format` / `npm run format:check`: Prettier with `prettier-plugin-astro`
- `npm run screenshot -- --out <dir>`, `npm run a11y`, `node scripts/diff.mjs <a> <b>`: see the `verify-ui` skill

## Content

Content lives in Markdown files in `src/content/`: frontmatter for the fields, and the body for the long text (a blank line starts a new paragraph). `index.astro` loads it with `getEntry`/`getCollection` and passes it down.

| File                      | Frontmatter                                                                     | Body                 |
| ------------------------- | ------------------------------------------------------------------------------- | -------------------- |
| `home.md`                 | Title ("Name — Role"), meta description, hero, About heading, skills, links, Contact | The About paragraphs |
| `experience/<job>.md`     | Title, duration, `order`                                                        | The description      |
| `projects/<project>.md`   | Title, year, optional link, tags, screenshots (first is the cover), `order`     | The description      |
| `manga/<strip>.md`        | Title, `placement`, panels with alt text                                        | (none)               |

- `src/content.config.ts` holds the schemas. A missing field, bad URL or email, missing image or unknown placement fails the build and names the file.
- `order` sets the position in the list, from 1. A manga strip's `placement` is `after-about`, `after-experience` or `after-projects`.
- Image paths in frontmatter are relative to the Markdown file (for example `../../assets/projects/x.png`). Commit the PNG/JPG original; Astro generates the resized AVIF/WebP at build time.
- The favicon, link-preview image (1200×630) and CV (`daria-artemova-cv.pdf`) are fixed files in `src/assets/`, imported by `Layout.astro` and `index.astro`. Replace a file to update it. The CV's URL is hashed, so it changes with each version.
- `markdown.smartypants` is off, so text renders exactly as typed (no automatic curly quotes or dashes).
- Keep content (copy, links, images) in `src/content/`. Components hold only interface text such as nav labels and button text.
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
- Icons come from icon packs through `astro-icon`: `<Icon name="ph:download-simple" class="icon" aria-hidden="true" />`. It inlines the SVG at build time, and an unknown name fails the build. Browse names at https://icon-sets.iconify.design.
  - UI icons are [Phosphor](https://phosphoricons.com), regular weight (`ph:`).
  - Skill logos are Simple Icons (`simple-icons:`). Devicon (`devicon-plain:`) and IcoMoon (`icomoon-free:`) fill the two gaps, Zustand and Accessibility.
  - Icons draw in `currentColor`, so colour them with `color`, not `fill`. Always pass `aria-hidden="true"`; the visible label or `aria-label` carries the meaning.
  - A new pack is `npm install @iconify-json/<pack>`. For an icon no pack has, add the SVG to `src/icons/` and use its file name (`name="my-icon"`).
- Analytics is Vercel Web Analytics. To track a click, add `data-track="event_name"` and optional `data-track-<prop>="value"` to the element; a single listener in `src/lib/analytics.ts` sends it. Never send visitor data.
- The design is light-only on purpose: two full-page texture overlays (`body::before`/`::after`) multiply over everything.

## Definition of done

1. `npm run build` passes.
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
