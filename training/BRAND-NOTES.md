# Brand Notes — WGA LSS Training Platform

## Extracted from Brand Assets

Colors extracted directly from `styles.css` and SVG logo files:

| Token | Value | Source |
|-------|-------|--------|
| `--color-bg` | `#09090f` | styles.css `--bg` |
| `--color-surface` | `#0f0f18` | styles.css `--surface` |
| `--color-card` | `#131320` | styles.css `--card` |
| `--color-gold` | `#c9a84c` | styles.css `--gold` |
| `--color-gold-light` | `#e8c97a` | styles.css `--gold-light` |
| `--color-ink` | `#f0ece6` | styles.css `--text` |
| `--color-muted` | `#8a899a` | styles.css `--text-muted` |
| `--color-dim` | `#52515f` | styles.css `--text-dim` |

Typography extracted from brand assets:
- **Headline/Display:** Cormorant Garamond (Georgia fallback) — weight 400/500
- **Body/UI:** DM Sans (system-ui fallback) — weight 300/400/500

Logo: inline SVG constructed from `wentworth-logo-dark.svg` — gold chevron mark + "WENTWORTH" in white Georgia serif + "GLOBAL ADVISORS" in gold DM Sans.

## Design Assumptions

The following decisions were made where the brand guide did not explicitly specify:

1. **Button border-radius:** `2px` (nearly square) — consistent with the existing site's sharp, professional aesthetic.
2. **Success color:** `#4caf82` — a muted green that pairs cleanly with the gold/dark palette without conflicting.
3. **Danger/error color:** `#e05c5c` — a muted red chosen for accessibility contrast on dark backgrounds.
4. **Warning color:** `#e8a84c` — warm amber, close to gold-light to stay within the warm palette.
5. **Card hover behavior:** `-translate-y-1` lift + gold shadow — derived from the existing site's button hover patterns.
6. **Lesson sidebar width:** 288px — standard for learning platforms, leaves comfortable reading width.
7. **Quiz pass threshold:** 80% — industry standard for professional certification programs.
8. **Certificate layout:** White background for print compatibility with gold accent borders; participant name shown as a fill-in placeholder field.

## Typography Scale

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Page title (h1) | Cormorant Garamond | 3–4.75rem fluid | 500 |
| Section heading (h2) | Cormorant Garamond | 2–3.25rem fluid | 500 |
| Card heading (h3) | Cormorant Garamond | 1.35–1.875rem | 500 |
| Eyebrow label | DM Sans | 0.7rem | 500 |
| Body copy | DM Sans | 1rem–1.0625rem | 300 |
| UI labels | DM Sans | 0.75rem | 500 |
