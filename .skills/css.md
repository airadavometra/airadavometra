---
description: CSS coding style and architecture patterns
tags: [css, styling, design-tokens]
---

# CSS Style & Architecture

## File Structure

- `reset.css` — Reusable (never modified between projects)
- `global.css` — Variables + element resets + global utilities + theme handling
- Components — Component-specific styles only (no separate CSS files)

**No other CSS layers.** Either global or component-scoped.

---

## global.css Organization

### 1. CSS Variables

**Colors** (with inline usage docs):

```css
:root {
  --color-blue: #519ce7; /* Primary accent */
  --color-black: #010b13; /* Text */
  --color-white: #f7f7f7; /* Background */
  --color-grey: #bebfc5;
  --color-grey-transparent: #bebfc588;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-text: var(--color-white);
    --color-bg: var(--color-black);
  }
}
```

**Rule:** Theme switching in global.css only via variable reassignment.

**Font Sizes** (via https://clamp.font-size.app/):

- Keep min & max viewport widths identical across all sizes
- Names: `--font-size-{min-px}-{max-px}`

```css
--font-size-16-24: clamp(1rem, 0.8543rem + 0.5979vw, 1.5rem);
--font-size-20-32: clamp(1.25rem, 1.0314rem + 0.8969vw, 2rem);
```

**Spacing** (using `min()` to cap growth):

```css
--spacing-4: min(0.25rem, 4px);
--spacing-8: min(0.5rem, 8px);
--spacing-16: min(1rem, 16px);
--spacing-32: min(2rem, 32px);
```

**Fixed Values** (no scaling):

```css
--border-radius: 8px;
--border-width: 1px;
--z-header: 100;
--z-modal: 200;
```

### 2. Element Resets

```css
button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: inherit;
  font-size: inherit;
}

ul {
  padding: 0;
  list-style-type: none;
}

p {
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-family: inherit;
  vertical-align: baseline;
}
```

### 3. Global Utility Classes

Project-specific only. Examples:

```css
.mobile-only {
  display: none;
}
.desktop-only {
  display: block;
}

@media (max-width: 48rem) {
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none;
  }
}

.hover-scale {
  transition: transform var(--transition-normal);
}
.hover-scale:hover {
  transform: scale(1.1);
}
```

---

## Responsive Design

**Desktop-first:** Design desktop, adapt for mobile.

**Single breakpoint:** `@media (max-width: 48rem)` (rems so scaled fonts trigger sooner)

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

Minimize media queries—use Flexbox/Grid structure instead.

---

## Rules

✓ All colors use variables  
✓ All font sizes use `clamp()` with consistent viewport bounds  
✓ All spacing uses `min()` variables (except fixed values)  
✓ Theme switching in global.css only  
✓ Fixed values (borders, z-index) in global.css  
✓ Component styles in component files  
✓ Desktop-first with single breakpoint `@media (max-width: 48rem)`  
✓ Breakpoint uses rems  
✓ Minimize media queries  
✓ Never use `transition: all`—specify properties  
✓ Only global + component CSS layers
