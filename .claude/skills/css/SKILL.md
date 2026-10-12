---
name: css
description: CSS style and architecture rules for this site. Use when writing or editing styles in .astro components or src/styles/global.css, adding colours, font sizes, spacing, z-index, transitions, hover or focus states, or responsive layouts.
---

# CSS style and architecture

## File structure

- `reset.css`: reusable reset, never modified between projects.
- `global.css`: tokens, element resets and global utilities.
- Components: component-specific styles only, in the component's scoped `<style>` block. No separate CSS files.

**No other CSS layers.** A style is either global or component-scoped.

---

## global.css organisation

### 1. Tokens (on `:root`)

**Colours**, with their usage noted inline:

```css
:root {
  --blue: #519ce7; /* Brand accent: fills, icons, underlines. Not for text. */
  --black: #010b13; /* Text, ink borders */
  --white: #f7f7f7; /* Page background */
  --grey: #bebfc5; /* Hairlines, inactive borders. Not for text. */
  --grey-transparent: #bebfc588; /* Manga strip band */

  --blue-text: #2563a8; /* Blue text on --white (5.7:1) */
  --grey-text: #6b6d75; /* Secondary text on --white (4.8:1) */
}
```

The site is light-only. The ink and grain overlays use `mix-blend-mode: multiply`, which needs the light background.

**Font sizes**, generated with https://clamp.font-size.app/:

- Viewport bounds are 390px (min) to 1728px (max). Keep them identical across all sizes.
- Names follow `--font-size-{min-px}-{max-px}`.

```css
--font-size-16-20: clamp(1rem, 0.9271rem + 0.299vw, 1.25rem);
--font-size-32-40: clamp(2rem, 1.8543rem + 0.5979vw, 2.5rem);
```

**Spacing** uses `min()` to cap growth: `--spacing-{px}` for 4, 6, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 96 and 128.

```css
--spacing-16: min(1rem, 16px);
```

**Fixed values** (no scaling):

```css
--border-width: 1px;

--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease-in-out;
--transition-slow: 0.5s ease-in-out;

--z-header: 100;
--z-menu-overlay: 150;
--z-menu: 200;
--z-ink-overlay: 9998;
--z-grain-overlay: 9999;
```

No border radius: the manga look uses sharp 1px ink borders.

### 2. Element resets

`button`, `a`, `ul` and `p` are reset in `global.css`: no padding, no list style, inherit font and colour. Don't re-declare these in components.

### 3. Global utilities

Project-specific only:

- `.visually-hidden`: screen-reader-only text.
- `.desktop-only` / `.mobile-only`: switch at the single breakpoint.
- `.hover-underline`: 3px `--blue` underline that grows on hover and focus. Wrap the text in a `<span>`.
- `.hover-scale`: `scale(1.1)` on hover and focus.

---

## Responsive design

**Desktop-first:** design for desktop, then adapt for mobile.

**Single breakpoint:** `@media (max-width: 48rem)`. It uses rems so scaled fonts trigger it sooner.

```css
.layout {
  display: grid;
  grid-template-columns: 1fr 2fr; /* Desktop */
}

@media (max-width: 48rem) {
  .layout {
    grid-template-columns: 1fr;
  }
}
```

Keep media queries to a minimum and lean on Flexbox and Grid structure instead.

---

## Interaction and accessibility

- Every `:hover` effect has a `:focus-visible` twin, so keyboard users get the same feedback.
- Put hover-only effects inside `@media (hover: hover)` so they don't stick on touch screens.
- Under `@media (prefers-reduced-motion: reduce)`, turn off smooth scrolling, slides and transforms.
- Text colours must reach 4.5:1 on `--white`. Use `--blue-text` and `--grey-text` for text, never `--blue` or `--grey`.
- Tap targets are at least 44×44px. Add padding, offset with a negative margin, and keep the visual spacing unchanged.

---

## Rules

✓ All colours use variables
✓ Text colours meet AA (`--blue-text` and `--grey-text` for text)
✓ All font sizes use `clamp()` with the same viewport bounds
✓ All spacing uses `min()` variables (except fixed values)
✓ Fixed values (borders, transitions, z-index) are tokens in `global.css`
✓ Component styles stay in component files
✓ Desktop-first, with the single breakpoint `@media (max-width: 48rem)` in rems
✓ Keep media queries to a minimum
✓ Never `transition: all`: list the properties
✓ Hover has a `:focus-visible` twin; hover-only effects go in `(hover: hover)`
✓ Respect `prefers-reduced-motion`
✓ Only global and component CSS layers
