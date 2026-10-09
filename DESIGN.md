---
name: ramus
description: a genre-first music player for plex
colors:
  coral: "#ff6b78"
  coral-hi: "#ff8a72"
  on-coral: "#1d0b0f"
  ground: "#0c0b10"
  ink: "#f4f2f5"
  ink-2: "#bdb8c4"
  ink-3: "#908b98"
  line: "rgb(244 242 245 / 0.1)"
  line-strong: "rgb(244 242 245 / 0.18)"
  glass: "rgb(244 242 245 / 0.06)"
  tint-a: "#2d3866"
  tint-b: "#6e6264"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.6rem + 4.8vw, 5.75rem)"
    fontWeight: 750
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 92"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.4vw, 4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 92"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 92"
  lede:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.99rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"cv11\", \"ss01\""
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    letterSpacing: "0.01em"
    fontFeature: "\"liga\" 0"
rounded:
  row: "7px"
  compact: "10px"
  control: "11px"
  window: "14px"
  nav: "16px"
  pill: "999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(4.5rem, 9vw, 8rem)"
  page: "1240px"
  measure: "62ch"
components:
  button-primary:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.on-coral}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-primary-lg:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.on-coral}"
    rounded: "{rounded.control}"
    padding: "0 25.6px"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  nav-download:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.on-coral}"
    rounded: "{rounded.compact}"
    padding: "0 16px"
    height: "40px"
  window-frame:
    backgroundColor: "#111111"
    rounded: "{rounded.window}"
  tree-row:
    textColor: "{colors.ink-2}"
    typography: "{typography.body}"
    rounded: "{rounded.row}"
    height: "34px"
  tree-row-current:
    textColor: "{colors.coral}"
    rounded: "{rounded.row}"
    height: "34px"
  search-field:
    textColor: "{colors.ink}"
    rounded: "{rounded.compact}"
    height: "44px"
    padding: "0 14px 0 42px"
---

# Design System: ramus

## Overview

**Creative North Star: "The Page That Plays Along"**

The site borrows the app's own trick: ramus repaints its window from whatever album is playing, and this page repaints its backdrop from the album art in whichever section holds the middle of the viewport. Everything sits on one continuous near-black scroll. Each feature lands once, at full size, as the real app at work inside a rounded window frame, with a two-tone lowercase headline beside or above it. Depth comes from light, not from cards: two soft colour washes in opposite corners of a fixed backdrop, and windows that throw long, soft shadows onto it.

The tone is dry and plain. Display type is a slightly condensed, heavy Bricolage Grotesque, always lowercase, so a bright statement runs straight into a dimmed continuation. Body text is Inter, the app's own face. JetBrains Mono is kept for the facts a sysadmin would check: versions, file sizes, requirements, the SideStore URL. Coral, taken from the logo, is the only colour that never changes. It marks what to download and where focus sits, and nothing else.

Density is low. Sections breathe on generous vertical padding, copy stays short, and two quiet devices carry any list: ruled rows separated by hairlines, and a genre tree in the app's sidebar style. The page turns down the startup landing-page formula of a glowing gradient hero over a grid of identical feature cards.

**Key Characteristics:**
- Dark-only near-black ground, re-tinted per section by two album-art colours.
- Coral as the single constant accent: primary download, focus ring, selection, the current tree row, matched search text.
- Real app captures and launch-film footage are the only imagery, framed as app windows.
- Lowercase two-tone display headlines: a statement in full ink, then a continuation in dim ink.
- Hairline-ruled lists instead of cards.
- Scroll-driven motion on CSS view timelines; with reduced motion the page is static and fully visible.

## Colors

A near-black violet ground under a moving pair of album-art tints, three steps of cool ink, and one coral accent.

### Primary
- **Logo Coral** (`coral`): the one constant accent. Fills the primary download button (as a 135° gradient into Coral Peach), the play disc on the film, and the focus ring. At 70% it is the text-selection colour; at 16% it is the background of the current tree row; at full strength it marks matched characters in genre search and the "looks like you're on this one" platform note.
- **Coral Peach** (`coral-hi`): the far end of the coral gradient only. Never used alone.
- **Coral Ink** (`on-coral`): text and icons on coral fills. A near-black with a red cast, so coral buttons read as one warm object.

### Secondary
- **Album Tint A / Album Tint B** (`tint-a`, `tint-b`): not fixed colours but two registered custom properties. The values above are the hero's pair and the initial values. Each section carries its own pair taken from the cover art in its capture (for example `#a54d4c #7c3345` for the pulsar, `#5a2433 #2a1d2c` for downloads). Tint A washes the top-left corner of the backdrop at 62% strength; Tint B washes the bottom-right at 52%. Tint A also mixes 22% into the genre explorer's panel and colours the scrollbar thumb.

### Neutral
- **Night Ground** (`ground`): the page background on the root element, under the washes. Also the browser `theme-color`.
- **Paper Ink** (`ink`): headlines, primary text, link text.
- **Mist Ink** (`ink-2`): ledes, body copy in lists, the nav's GitHub link at rest, inactive tree rows.
- **Dusk Ink** (`ink-3`): the dimmed half of every headline, meta lines, placeholders, chevrons, footnotes.
- **Hairline** (`line`): the nav border, explorer dividers, tree guide lines, the footer rule.
- **Rule** (`line-strong`): the rules between rows in ruled lists, and secondary button borders.
- **Glass** (`glass`): the fill of secondary buttons and of the copy button in the SideStore field. Hover lifts it to 11% (buttons) or 12% (copy).

### Named Rules
**The One Constant Rule.** Coral is the only colour that stays the same in every section. It goes on download actions, focus, selection and the live "you are here" states, never on decoration, headings or borders at rest.

**The Album Decides Rule.** A section's tint pair comes from the album art visible in its own capture. Tints are never chosen for mood or to look good together. They drift in over 1.4s on the shared ease-out, because `--tint-a` and `--tint-b` are registered `<color>` properties and so can be animated.

**The Night Only Rule.** The page sets `color-scheme: dark` and offers no light theme. The tint washes need a near-black ground to read as light, and the page shows the app in its own dark, album-tinted window, so a light page would misrepresent the product.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), variable 200–800, self-hosted
**Body Font:** Inter (with system-ui, sans-serif), variable 100–900, self-hosted
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace), variable 100–800, self-hosted

**Character:** A slightly condensed, heavy grotesque with a bit of quirk, set tight and lowercase, over the app's own neutral Inter. The mono is kept for numbers and filenames, so facts look like facts.

### Hierarchy
- **Display** (750, `clamp(2.75rem, 1.6rem + 4.8vw, 5.75rem)`, line-height 0.95, width axis 92): the hero H1 only, about 15ch wide, centred. The privacy statement reuses the same size at 700.
- **Headline** (700, `clamp(2.25rem, 1.4rem + 3.4vw, 4rem)`, line-height 1, tracking -0.035em, width axis 92): every section's H2, two-tone, capped at 11–20ch depending on layout, balanced wrapping.
- **Title** (700, `clamp(1.6rem, 1.2rem + 1.4vw, 2.25rem)`, tracking -0.03em): platform names in the downloads list. Run-in headings in the extras list use the display face at 650, lede size.
- **Lede** (400, `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)`, line-height 1.5, Mist Ink): the one paragraph under each headline, at most 62ch (46ch in the hero).
- **Body** (400, `clamp(1.0625rem, 0.99rem + 0.3vw, 1.1875rem)`, line-height 1.55, Inter features cv11 and ss01): running text, pretty wrapping.
- **Label** (JetBrains Mono 400, 0.75–0.8rem, ligatures off): version strings, file sizes, requirements, the film's duration, the SideStore URL.

### Named Rules
**The Two-Tone Rule.** A section headline is one sentence in Paper Ink followed by a continuation in Dusk Ink inside the same heading. The bright half states the feature; the dim half adds the wry follow-up. Both halves are lowercase except for proper names and platform names.

**The Facts in Mono Rule.** Versions, sizes, requirements and URLs are set in JetBrains Mono at label size. Prose never is.

## Layout

One centred column: content width is `min(100% − 2 × gutter, 1240px)`. Sections stack with `clamp(4.5rem, 9vw, 8rem)` of vertical padding. The hero opens with `clamp(8rem, 16vw, 11.5rem)` of top padding to clear the floating nav. Feature moments use two arrangements. **Stack** centres the headline and lede over a wide capture (the component supports it; no section uses it at present). **Beside** sets copy and capture in two equal columns, with the capture first when flipped. The colour section uses 0.8fr/1.2fr; extras and the genre explorer use similar uneven pairs. Gaps between copy and capture run `clamp(2.5rem, 6vw, 5–6rem)`.

Breakpoints: below 900px every two-column grid collapses to one column and flipped captures return to source order; below 760px the nav tightens its gaps and the platform rows go single-column; below 640px the hero buttons stack full-width, the pulsar band switches to 4:3, and the third phone is dropped. Anchor jumps reserve 88px under the floating nav.

## Elevation & Depth

Depth is light on a dark ground, not stacked surfaces. The fixed backdrop paints two radial washes of the current tints over Night Ground. Above it, only three things lift: windows, the floating nav, and coral fills. Shadows are long, soft and negative-spread, like a lit object over a dark room. There are no hard offsets and no outlines used as decoration.

### Shadow Vocabulary
- **Window lift** (`box-shadow: 0 0 0 1px rgb(255 255 255 / 0.08), 0 30px 80px -20px rgb(0 0 0 / 0.65), 0 12px 30px -12px rgb(0 0 0 / 0.5)`): every app-capture frame. The 1px ring stands in for the window edge.
- **Nav float** (`box-shadow: 0 12px 40px -18px rgb(0 0 0 / 0.7)` with `backdrop-filter: blur(20px) saturate(1.5)` over `rgb(14 13 19 / 0.62)`): the floating translucent nav only.
- **Coral glow** (`box-shadow: 0 10px 30px -12px rgb(255 107 120 / 0.55)`): under the primary button only.
- **Disc drop** (`box-shadow: 0 14px 40px -10px rgb(0 0 0 / 0.6)`): the film's play disc.
- **Device drop** (`filter: drop-shadow(0 30px 40px rgb(0 0 0 / 0.5))`): phone captures, which carry their own device outline and so take a shape-following shadow instead of a frame.

### Named Rules
**The Light, Not Cards Rule.** No section content sits on a card. Grouping comes from hairline rules, whitespace and the window frame. A tinted panel appears only where the app itself would draw one (the genre explorer).

## Shapes

Soft, app-like corners at fixed steps: 14px for windows, 11px for buttons, 10px for compact controls inside the nav and fields, 16px for the nav shell, 7–8px for list rows inside the explorer, and full pills for small overlay labels (the film label). Borders are 1px hairlines only. The colour section's step indicator uses 10px-high rounded bars, each a gradient of that album's backdrop corners, that widen from 36px to 64px when active. The focus ring is a 2px coral outline, 3px offset, 6px radius.

## Components

### Buttons
Solid and quiet: one coral gradient for the download path, translucent glass for everything else.
- **Shape:** gently rounded (11px), minimum height 48px (56px large; 40px compact in the nav), weight 600 Inter, icon at 1.15em with 0.6em gap, no wrapping.
- **Primary:** a 135° gradient from Logo Coral to Coral Peach with Coral Ink text and the coral glow. Used for the OS-detected download, the nav download, and the matching platform row when the visitor's OS is detected.
- **Hover / Focus:** primary brightens to `#ff7b86 → #ff9a82`; secondary fill goes from 6% to 11% and the border from 18% to 28%; all buttons press down 1px on active; focus shows the coral ring. Transitions run 0.2s on the shared ease-out.
- **Secondary:** Glass fill, 1px Rule border, Paper Ink text. Used for GitHub, release links and non-detected platform downloads.

### Window Frame
The single container for app imagery. 14px corners, clipped content, `#111` underlay, window-lift shadow. It holds screenshots, the colour section's five cross-fading frames, the launch film, and the live genre explorer. Captures inside fill the frame width; no inner padding.

### Genre Explorer (signature)
A live sidebar drawn in the app's own style inside a window frame whose fill is 22% Tint A mixed into `#121118`. A search field sits on top: 44px, 10px radius, darkened fill, coral caret, search icon inset at 28px, border turning coral on focus. Matching results list the genre with matched characters in coral and its path below in Dusk Ink. **Tree rows** are 34px, 7px radius, Mist Ink, indented 18px per level from a 10px start, each level with a 1px Hairline guide under its parent's chevron. Hover gives a 6% fill and Paper Ink; an open branch is Paper Ink with its 14px chevron turned 90°; the current row is coral text on a 16% coral fill at weight 550. A footnote in Dusk Ink names the source of the tree.

### Ruled Lists
Used for the extras and the downloads. A Rule border on top, then one per row at the bottom, with no fills and no cards. **Extras** rows are a single sentence: a run-in display-face heading ending in a full stop, then Mist Ink body at lede size, padded about 1.4rem vertically, beside a sticky headline. **Download** rows are a two-column grid (name and requirement on the left, files on the right), 1.6rem vertical padding, with secondary files as underlined links followed by sizes in mono.

### Navigation
A floating translucent bar 12px from the top, up to 1080px wide, 16px radius, Hairline border, blurred and saturated backdrop. Logo mark and wordmark (display, 700, 1.3rem) on the left; centred anchor links in Mist Ink that brighten to Paper Ink on hover; on the right a GitHub link with the version in mono and the compact coral download. Links hide below 760px; the version hides below 420px.

### Inputs / Fields
- **Style:** 1px Hairline border, `rgb(0 0 0 / 0.25)` fill, 10px radius, Paper Ink text, Dusk Ink placeholder.
- **Focus:** border shifts to 70% coral; caret is coral.
- **Copy field:** the SideStore URL in mono inside a 10px-radius Rule border, with a Glass copy button joined to its right edge.

### Motion
- **Hero settle:** the hero window starts tilted back (`rotateX(24deg) scale(0.9)`, brightness 0.75) under an 1800px perspective, pivoting from its top edge, and settles flat over a view timeline from `entry 0%` to `cover 45%`.
- **Rise:** captures, the film and the phones fade up from 48px below over `entry 0%` to `entry 70%` of a view timeline.
- **Colour steps:** with script, the colour section is 100vh plus 60vh per album (400vh for five) and its stage is pinned. Scroll progress picks one of five frames of the same window, each rendered by the app's own components with a different album playing; frames and the mono now-playing line cross-fade (0.9s and 0.6s), the active swatch widens, and the section's tint pair becomes that album's top-left and bottom-right backdrop corners, which re-tints the page.
- **Re-tint:** the root eases `--tint-a`/`--tint-b` over 1.4s on `cubic-bezier(0.16, 1, 0.3, 1)`, the shared ease-out for every transition on the site.
- **Reduced motion and fallbacks:** content is visible by default. Settle and rise run only under `prefers-reduced-motion: no-preference` and only where `animation-timeline: view()` is supported. Under reduced motion, smooth scrolling, the tint transition and the colour-section fades are switched off, so tints and frames change instantly.

## Do's and Don'ts

### Do:
- **Do** give every section a `data-tint` pair taken from the album art in its own capture.
- **Do** put app imagery inside the window frame (14px corners, window-lift shadow); phone captures that carry their own device outline take the device drop instead.
- **Do** write section headlines as two-tone lowercase sentences: Paper Ink statement, Dusk Ink continuation.
- **Do** keep coral for downloads, focus, selection and live "current" states.
- **Do** set versions, sizes, requirements and URLs in JetBrains Mono at label size.
- **Do** group lists with 1px Rule hairlines between rows.
- **Do** drive entrances from CSS view timelines inside `prefers-reduced-motion: no-preference` and `@supports (animation-timeline: view())`, with content visible by default.

### Don't:
- **Don't** use any imagery other than real ramus captures, launch-film frames and loops, and graphics drawn in code. Never generated art, mockups or stock.
- **Don't** add a light theme or light sections; the scheme is dark only.
- **Don't** put features on a grid of identical cards, or open with a gradient-glow hero.
- **Don't** use coral for headings, borders at rest or decoration, and don't introduce a second constant accent.
- **Don't** pick section tints for mood; they come from the cover on screen.
- **Don't** use hard offset shadows; elevation is long, soft and negative-spread.
