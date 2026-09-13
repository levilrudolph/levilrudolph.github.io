# Green Ink — A Newspaper Design System

A broadsheet identity for a **personal portfolio site belonging to a mechanical engineering
undergraduate**. Forest greens pressed into warm newsprint, set entirely in serifs, and structured
like the front page of a small, well-made paper. Every page is a sheet of newsprint: a folio rule
across the top, a nameplate, a lead story, and clippings below the fold.

There is exactly **one product**: the portfolio website. It has four views — front page, case study,
about & CV, contact. No app, no docs site, no marketing surface. The system is sized for that.

## Sources

The whole system derives from one attached artefact, mounted read-only during authoring:

- `Design System/green-ink-design-system.html` — a hand-authored single-file spec: token block,
  palette, type scale, component ("furniture") demos, rule library, spacing scale, press notes.
  Every hex value, font stack, spacing step and interaction in this project is copied verbatim
  from it.
- `Design System/green-ink-design-system.svg` — a flat 1440×1780 export of the same document.
  No additional information; nothing was taken from it that the HTML did not already state.

No Figma file, no GitHub repository, no slide deck, and **no logo file** were supplied. The reader
of this readme is not assumed to have access to either source; everything needed is reproduced here.

## Content fundamentals

The voice is a small-town paper that respects its reader: plain, dry, quietly confident, and never
salesy. Copy is written as **journalism about the work**, not as marketing for the person.

- **Person.** Body copy is first person singular, past tense, understated — "The first prototype
  howled." Bylines and standing labels are third person: "By J. Hartley · Mechanical Engineering."
  Never "we're excited to," never second-person hype ("you'll love").
- **Sentence shape.** Short declaratives with a concrete number in them. "38% lighter at the same
  factor of safety — and a lesson in what to ignore." A dry aside after an em dash is the house
  joke; it appears about once per section, never twice.
- **Casing.** Sentence case for headlines and clipping titles ("A two-stage gearbox, forty per cent
  quieter"). ALL CAPS is *only* ever letterspaced small-caps furniture — kickers, folios, bylines,
  buttons, tags. Body copy is never capitalised for emphasis; italics do that job.
- **Newspaper furniture as copy.** Sections are departments ("Selected Works", "Correspondence",
  "The Record", "The Particulars"). Projects are cases ("Case No. 03 · 2025"). Clippings end with a
  jump line ("Continued on page 4 →") even though nothing jumps — it is the joke that holds the
  whole conceit together. Form success reads "Filed."
- **Numbers.** Spelled out in display headlines ("forty per cent"), figures in body and metadata
  ("6.1 dB(A)", "6,000 rpm"). Always attach the measurement to the claim.
- **Emoji: never.** Not in copy, not in UI, not as icons. The only non-alphabetic glyphs in the
  system are the ochre dateline star `✦`, the asterism dinkus `⁂`, the arrow in a jump line `→`,
  and typographic quote marks `“ ”`.
- **Length.** Decks are one sentence. Clipping deks are one sentence. Captions are one sentence.
  If it needs two, it belongs in the story.

## Visual foundations

**Colour.** Seven values, no more. Two paper stocks — newsprint `#F4EFE1` (every page) and aged
stock `#E9DFC8` (clippings, spec rails, forms, code). Three greens — pine ink `#16362A` is the
"black" for all body text and heavy rules, forest `#2C6A4B` sets the masthead, headings and button
fills, deep forest `#245A40` is the AA-safe green reserved for links. Faded sage `#6E7E6C` carries
captions, datelines and metadata. Ochre `#B3782C` is the **second ink** — a real spot colour, used
sparingly: kickers, the tag `spot` fill, quote marks, caption ticks, the off-register masthead
ghost, the active nav underline. Never more than one ochre element competing in a view. There is no
pure black, no pure white, no grey, and no fourth hue.

**Type.** Three serifs, no sans, anywhere. Fraunces (variable, 500–600) is display: nameplate,
headlines, section heads, and every piece of letterspaced small-caps furniture. Newsreader
(300–400 plus italics) is body: running text, decks, captions. A monospace stack appears only in
token tables. Decks and captions are *always italic*. Display tracking is negative (−.015em to
−.02em); small-caps tracking is aggressively positive (.14em to .3em) — that contrast is the
signature. The nameplate is the one place Fraunces' WONK axis is switched on (`SOFT 30, WONK 1`);
headlines use `SOFT 40, WONK 0`. Measure stays near 34rem / 60–70 characters inside a 72rem
broadsheet.

**Spacing & layout.** A 4pt base (`--s-1` 4px through `--s-12` 96px). The page is a centred sheet
capped at 72rem with a fluid gutter, never full-bleed. Nothing is fixed or sticky except the grain
overlay — no floating headers, no sticky CTAs, no scroll-jacking. Content is organised in asymmetric
grids (1.15fr / .85fr for a lead story, 1fr / 17rem for a story plus spec rail) and body copy runs
in real CSS columns with a hairline column rule.

**Backgrounds & texture.** Flat newsprint, plus one fixed fractal-noise grain overlay at .045
opacity, `mix-blend-mode: multiply`, at 50% layer opacity, covering the whole viewport. That is the
only background treatment. **No gradients as decoration** — the single gradient in the system is
forest→pine, used exclusively as the base of a duotone photograph. No blur, no glass, no
transparency effects; the only alphas in the system are the hairline rule `rgba(22,54,42,.22)` and
the .32 masthead ghost.

**Imagery.** Never full colour, never warm. Photos are grayscaled, blended at `luminosity` over the
forest→pine gradient, and covered with a 6px radial halftone dot screen at .5 opacity in `screen`
blend — a cool green duotone against warm paper. Every image carries an italic sage caption directly
beneath it with a 2px ochre tick on the left. There are no illustrations in this system.

**Borders, cards, shadows.** `--radius: 0`. Corners are square everywhere — buttons, cards, inputs,
photos. A "card" is either a hairline-bordered plain box or a clipping printed on aged stock with a
full-ink 1px border; it has **no shadow at rest**. There are no soft shadows anywhere in the system.
The only box-shadow values are hard offsets: `4px 4px 0` in ochre or forest (the press lift), and
`0 3px 0` in pine (the Oxford thick-over-thin rule). Structure comes from rules, not boxes: hairline
between rows, heavy 3px over a section or quote, Oxford under the masthead, 2px dotted for a light
aside, and the `⁂` dinkus for a soft break.

**Motion, hover, press.** One idea only. Buttons and linked clippings translate `(−2px, −2px)` and
gain a hard 4px ochre offset — ink catching the paper — over 120ms `ease`. Primary buttons also swap
forest→pine on hover. Links change from deep forest to pine and their underline turns ochre. There
is no separate press state, no scale-down, no ripple, no fade-in-on-scroll, no parallax, no
animation on load. All transitions are disabled under `prefers-reduced-motion`, and the page reads
identically without them. Focus is a solid 2px forest outline at 3px offset — never removed.

## Iconography

**This system has no icon set, and does not want one.** The source spec defines none, so none was
invented, imported, or substituted from a CDN. Meaning is carried by typography and rules.

What stands in for icons, all of it plain Unicode set in the brand fonts:

- `✦` — ochre dateline separator, between masthead metadata items.
- `⁂` — the asterism dinkus, forest green, for a soft section break and above the colophon.
- `→` — in clipping jump lines ("Continued on page 4 →") and back links ("← Back to page one").
- `“ ”` — real typographic quote marks; the opening mark in a pull quote is set 1.6em in ochre.

**Emoji are never used.** If a future need genuinely requires glyph icons, use a hairline serif-era
line set at 1px stroke to match the rule weights — but prefer a letterspaced small-caps label
instead; that is the system's native answer.

## Logo

**None was supplied and none was drawn.** The mark *is* the nameplate: the surname set in Fraunces
600 with WONK on, in forest green, with a 2px/3px off-register ochre ghost behind it and an Oxford
rule beneath. Use the `Masthead` component wherever a logo would go. `assets/` is intentionally
empty of marks. Ask the portfolio's owner for a real surname before shipping — "Hartley" is a
placeholder throughout.

## Fonts

Fraunces and Newsreader are loaded from Google Fonts via `tokens/fonts.css`, exactly as the source
spec did. No binaries ship with this system, and there are no `@font-face` rules of our own — if you
need self-hosted files, download both variable families from Google Fonts and swap the `@import` for
local `@font-face` declarations.

## Components

Fifteen primitives, drawn one-to-one from the "Furniture" and page-structure sections of the source
spec. Nothing was added that the source does not define.

**`components/core/`** — controls
- `Button` — square press button; `primary` and `ghost`, disabled state, renders as `a` or `button`.
- `Tag` — outlined small-caps category chip; `spot` fills it with ochre.
- `InlineLink` — italic deep-forest link for running copy.

**`components/press/`** — standing page furniture
- `Folio` — three-part running header rule (publication / standing line / edition).
- `Masthead` — nameplate with "The" line, off-register ochre ghost, dateline, Oxford rule.
- `SectionHead` — rule-flanked small-caps label, italic note, Fraunces heading.
- `Rule` — the line library: `hair`, `heavy`, `oxford`, `dotted`.
- `Dinkus` — the `⁂` section break.

**`components/editorial/`** — story parts
- `Kicker` — ochre small-caps overline.
- `Byline` — "By Name · role" in small caps plus italic sage.
- `DropCap` — lede paragraph with a raised forest initial.
- `PullQuote` — heavy rule over, hairline under, ochre quote mark, small-caps citation.
- `NewsPhoto` — duotone image well with halftone screen.
- `Caption` — italic sage caption with an ochre tick.
- `Clipping` — the project card, printed on aged stock; lifts on hover when linked.
- `Columns` — multi-column running text with a hairline column rule.

### Intentional additions

- `Chrome.jsx` → `Page` (in the UI kit, not a published primitive) wraps a view in the grain
  overlay, sheet, folio, department nav and colophon. The source spec describes each of those
  pieces separately but never assembles them; the kit needs one wrapper to be click-through.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` lines only. |
| `tokens/colors.css` | Base palette plus semantic aliases (`--text-body`, `--surface-inset`, …). |
| `tokens/typography.css` | Families, weights, sizes, line heights, tracking, Fraunces axes, measure. |
| `tokens/spacing.css` | 4pt scale and semantic spacing. |
| `tokens/rules.css` | Radius (0), border presets, hard offset shadows, grain, halftone. |
| `tokens/motion.css` | The 120ms press transition and the 2px lift. |
| `tokens/base.css` | Body, link, focus and reduced-motion resets. |
| `tokens/fonts.css` | Google Fonts import for Fraunces + Newsreader. |
| `components/core/`, `components/press/`, `components/editorial/` | The fifteen primitives, each with `.jsx`, `.d.ts` and `.prompt.md`, plus one card HTML per directory. |
| `guidelines/*.card.html` | Sixteen foundation specimen cards — Colors, Type, Spacing, Brand. |
| `ui_kits/portfolio/` | The portfolio website kit: `index.html` (click-through), `Chrome`, `FrontPage`, `CaseStudy`, `About`, `Contact`, `data.js`, `README.md`. |
| `templates/portfolio-page/` | Starting template — a full front page consuming projects can copy. |
| `thumbnail.html` | Homepage tile. |
| `SKILL.md` | Agent Skills front matter, for use outside this project. |
