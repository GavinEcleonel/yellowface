# DESIGN.md

Source of truth for the visual direction of the Yellowface project site. Read this before changing `styles.css`.

## Direction

Editorial block layout in three colors. The page looks like a marked-up manuscript: cream paper, charcoal ink, and acid yellow used the way a highlighter is used.

**Signature move:** every direct quotation from the novel is set in highlighter yellow. Nothing else gets that treatment. A reader can tell a quotation from the group's own writing at a glance, which is also an academic requirement of the project.

The three kinds of text and how each looks:

| Kind | Label on the page | Treatment |
|---|---|---|
| Project narration (setups, what June does) | "Project narration", "What June actually does" | Plain text on paper; the canon panel is charcoal with cream text |
| The group's interpretation | "Our interpretation" | Cream card with a thick charcoal left rule |
| Direct quotation | "Direct quotation" | Highlighter-yellow text background, speaker and PDF page underneath |

## Colors

| Token | Hex | Use |
|---|---|---|
| `--acid` | `#F2E61C` | Highlighter on quotations, primary buttons, offset block behind illustrations, progress fill |
| `--acid-deep` | `#D9CD00` | Hover state on yellow surfaces |
| `--char` | `#18181B` | Text, top bar, canon panel, intro background |
| `--char-2` | `#26262B` | Raised surfaces on charcoal |
| `--cream` | `#F3EDDC` | Page background (paper), text on charcoal |
| `--paper` | `#FBF8EE` | Cards on the cream page |
| `--rule` | `#CFC7B0` | Hairlines on cream |
| `--muted` | `#59554B` | Secondary text on cream (6.4:1) |
| `--muted-on-char` | `#BDB8A8` | Secondary text on charcoal |

Rules: yellow is never used as a text color on cream. Text on yellow is always charcoal. Body text contrast is at least 4.5:1.

## Typography

One family: **Archivo** (variable, widths 62 to 125, weights 100 to 900), self-hosted in `assets/fonts/` under the SIL Open Font License, `font-display: swap`.

The reference spec called for Nimbus Sans L (body) and Nimbus Sans Extended D bold (display). No web-embedding license could be confirmed for the Extended D file, so no Nimbus font files ship. Archivo at width 125 stands in for the extended display face and Archivo at width 100 for the body grotesque.

| Role | Settings |
|---|---|
| Display (h1) | width 125, weight 800, uppercase, `letter-spacing: -0.035em`, `line-height: 0.95`, `clamp(2.3rem, 7.2vw, 5.6rem)` |
| Section heads (h2) | width 125, weight 800, `letter-spacing: -0.025em`, `clamp(1.5rem, 3.4vw, 2.5rem)` |
| Question | width 110, weight 700, `clamp(1.25rem, 2.4vw, 1.75rem)` |
| Body | width 100, weight 400, `1.0625rem` to `1.125rem`, `line-height: 1.6`, measure up to 66ch |
| Labels | width 110, weight 700, uppercase, `0.72rem`, `letter-spacing: 0.08em` |
| Buttons | weight 800, uppercase, `letter-spacing: 0.04em` |

## Spacing

Base unit 8px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96. Page gutter is 20px on phones and 40px from 800px up. Content max width 1180px.

## Components

- **Top bar**: charcoal, sticky. Project name on the left, "Scene N of 7" with a seven-segment bar in the middle, Restart on the right.
- **Illustration frame**: 16:9, tilted -1.2deg, with an acid-yellow block offset 14px behind it. Tilt is removed below 700px.
- **Choice buttons**: full-width, 2px charcoal border, letter badge (A/B). Selected state is charcoal with yellow badge and `aria-pressed="true"`.
- **Primary button** (Begin, Continue): acid yellow, charcoal text, 2px charcoal border, hard 4px offset shadow.
- **Secondary button** (Back, Restart): transparent with 2px border.
- **Cards**: square corners, no soft shadows, no rounded corners larger than 2px.
- **Focus**: 3px outline, charcoal on light surfaces and yellow on charcoal, 3px offset. Never removed.
- **Texture**: SVG turbulence grain over the whole page at low opacity, non-interactive.

## Motion

GSAP 3.13 and SplitText, self-hosted in `assets/vendor/`. All motion is skipped when `prefers-reduced-motion: reduce` is set, and nothing is hidden by CSS, so the site works if the scripts fail to load.

| Effect | Settings |
|---|---|
| Heading reveal | SplitText lines with mask, `yPercent: 110` to 0, 0.9s, `power3.out`, 0.06s stagger, after `document.fonts.ready` |
| Illustration reveal | scale 1.2 to 1 and counter-rotation to 0, 1.1s, `power3.out`, once, when 35% in view |
| Pointer parallax | `gsap.quickTo`, image up to 10px, yellow block up to 6px the opposite way, fine pointers only |
| Continue pulse | scale to 1.045, `sine.inOut`, yoyo, pauses on hover and focus |
| Result panels | fade and 16px rise, 0.5s, 0.08s stagger |

Not used, by decision: hold-to-progress, idle word float, proximity parallax, chapter-exit animation.
