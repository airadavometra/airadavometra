---
name: verify-ui
description: Build, run and check the portfolio site visually and for accessibility. Use after any change to frontend-astro components, styles or content (src/data, src/assets), when implementing a design frame, or when asked to screenshot, run or check the site.
---

# Verify UI changes

All commands run in `frontend-astro/`. Keep screenshots and reports in the scratchpad, never in the repo.

## 1. Build and serve

```sh
npm run build                         # astro check + astro build
npx astro preview --port 4321         # run in the background; serves dist/
```

Wait until `curl -s -o /dev/null -w "%{http_code}" http://localhost:4321` returns 200. Rebuild after every change: preview serves `dist/`, not the sources.

## 2. Screenshots

```sh
npm run screenshot -- --out <dir> --elements "#about,#experience,#projects,#contact,.manga-wrapper"
```

- For each viewport (`desktop` 1440×900, `mobile` 390×844, matching the design frames) it writes `<viewport>-fold.png` (first screen), `<viewport>-full.png` (whole page) and one `<viewport>-<selector>.png` per element.
- Captures are deterministic: scrolling is instant and animations are disabled, so two runs of the same build come out identical.
- Console errors and failed requests are printed. The `/_vercel/insights` 404 is filtered out because it only exists on Vercel.
- Open the PNGs with the Read tool to look at them. Check the fold image when hero height matters.

## 3. Compare

- **A change that shouldn't affect visuals** (refactor, deps, data fetching): `node scripts/diff.mjs <before-dir> <after-dir>`. Any file that isn't "identical" needs explaining.
- **Implementing a design frame:** compare the element screenshot with the frame's "after" image at the same viewport, and list any deviations in your summary.

To get a "before" set from the last commit without touching the working tree, build a `git worktree` of `HEAD` in the scratchpad. Don't stash the user's changes.

## 4. Accessibility

```sh
npm run a11y        # axe, WCAG 2.2 A/AA, desktop + mobile; exits 1 on violations
```

It hides the texture overlays first. With them on, axe can't measure contrast, which is why Lighthouse shows a false 100.

Then do a keyboard pass in a real browser, or script it with Playwright:
- Tab order follows the page.
- Every control has visible focus.
- The mobile menu traps focus and closes on Esc.
- Live regions announce state changes, such as email copied or the screenshot changing.

## 5. Performance (when images, fonts or scripts change)

```sh
npx -y lighthouse@12 http://localhost:4321 --output=json --output-path=<scratchpad>/lh-mobile.json \
  --chrome-flags="--headless=new" --only-categories=performance,accessibility,best-practices,seo --quiet
```

Add `--preset=desktop` for desktop. Report LCP, CLS and total byte weight against the previous run, and treat a regression as a bug.

| Lighthouse (local preview) | Mobile perf | Mobile LCP | CLS | Weight (mobile / desktop) |
| --- | --- | --- | --- | --- |
| Oct 2026, before the audit | 61 | 7.2 s | 0.28 | 4.1 MB / 4.1 MB |
| After Phase 3 (performance) | 96 | 2.6 s | 0 | 560 KB / 401 KB |
| Content moved from Sanity into the repo (AVIF + WebP) | 96 | 2.6 s | 0 | 450 KB / 362 KB |

Scroll smoothness was measured with a 4× CPU slowdown: 60 fps with or without the full-page texture overlays. Re-measure if you add anything that animates over large areas.
