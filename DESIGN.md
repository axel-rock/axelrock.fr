---
name: Axel Rock
description: Personal site and blog of Axel Rock. Warm paper minimalism with editorial serif accents.
colors:
  primary: "#333333"
  muted: "#78786f"
  accent: "#ff6b35"
  neutral: "#faf9f7"
  border: "#d8d6cd"
  surface: "#f0eee8"
typography:
  hero:
    fontFamily: Montreal
    fontSize: 6rem
    fontWeight: 450
    lineHeight: 1
    letterSpacing: 0.01em
  hero-sub:
    fontFamily: Eiko
    fontSize: 2rem
    fontWeight: 350
  title:
    fontFamily: Eiko
    fontSize: 2.5rem
    fontWeight: 400
    lineHeight: 1.2
  heading:
    fontFamily: Eiko
    fontSize: 1.5rem
    fontWeight: 400
    lineHeight: 1.3
  body-md:
    fontFamily: Montreal
    fontSize: 1.2rem
    fontWeight: 450
    lineHeight: 1.7
    letterSpacing: normal
  label-caps:
    fontFamily: Montreal
    fontSize: 0.875rem
    fontWeight: 500
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 8px
  md: 16px
  lg: 40px
  xl: 96px
components:
  link:
    textColor: "{colors.accent}"
  code-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
---

## Overview

Quiet, warm, editorial. The site should feel like good paper: an off-white
ground, near-black ink, generous whitespace, and a single orange accent doing
all the interactive work. Serif is reserved for moments of voice (headlines,
italic asides); running text is a calm sans. Nothing decorative, no borders or
cards unless content demands them.

Both light and dark schemes exist via CSS `light-dark()`. Tokens above are the
light values; dark counterparts live in the code (`#1f1f1f` ground, `#e0e0e0`
ink, `#a0a0a0` muted, `#4a4a4a` borders, `#2c2c2c` surfaces). The accent is
shared.

## Colors

- **Primary (#333333):** Ink. All reading text. Softer than pure black.
- **Muted (#78786f):** Metadata, dates, uppercase labels, back-links.
- **Accent (#ff6b35):** The only interactive color. Links and hovers. Never
  use it for large surfaces or text blocks.
- **Neutral (#faf9f7):** Warm paper background.
- **Border (#d8d6cd):** Hairline rules, blockquote bars, table heads.
- **Surface (#f0eee8):** Inline code and code block backgrounds.

## Typography

Three self-hosted Pangram Pangram families, each with one job:

- **PP Neue Montreal** (`--font-sans`, `--font-text`) — the interface and
  reading voice. Hero name, labels, navigation, tables, and long-form prose.
  Body copy uses Regular 450 with normal letter-spacing. Bold prose uses Medium
  500 to keep emphasis restrained.
- **PP Eiko** (`--font-serif`) — the editorial voice. Headlines and italic
  asides only. It is a display serif with hairline strokes: it must never be
  used for long-form body copy, and it has no 600/700 weights. Available
  weights: 100, 300, 400, 500, 800, 900. Requesting 600 or 700 snaps up to
  Heavy 800.
  PP Frama and Frama Text are loaded but currently unused. They are available for
  future work, not for body text.

Sizes in the tokens are the desktop maximums; large headings scale fluidly
with `clamp()` in the code (e.g. hero: `clamp(3rem, 8vw, 6rem)`; article
title: `clamp(1.75rem, 5vw, 2.5rem)`).

Base: `16px` root, body copy at `1.2em`.

## Layout

- Single centered column. Content maxes at `42rem` for reading pages (blog),
  `48rem` for the home page.
- Vertical rhythm through margins only, no horizontal rules between sections.
- Section spacing on the home page: `3rem` blocks, `6rem` around the hero.

## Do's and Don'ts

- **DO NOT** change the hero typography on the home page (weights,
  letter-spacing). It is locked and marked as such in the code.
- **DO NOT** set body or prose text in Eiko. Eiko is display-only.
- **DO NOT** add letter-spacing to body copy.
- **DO NOT** request font weights a family does not ship; check the
  `@font-face` blocks in `src/lib/css/fonts/` first.
- **DO NOT** introduce new greys, accent colors, or fonts.
- **DO** keep the accent color exclusively for links and interaction.
- **DO** prefer removing visual elements over adding them.
