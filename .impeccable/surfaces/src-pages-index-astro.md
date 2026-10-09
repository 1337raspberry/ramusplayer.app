---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Landing page (`/`)

**Mode:** Persuade. **Scope:** the whole site for now: one page, pitch plus downloads.

**Visitor and job:** a Plex owner with a music library, deciding whether to install ramus. They act by downloading the build for their device, or by opening the GitHub repo.

**Proof on hand:** real app screenshots, three loops (genre tree, filters, pulsar), the launch film, and the bundled genre tree itself (`ramus-tauri/data/open.json` in the ramus repo, 1,579 genres).

**Owner's answers for this surface:** the first belief is genre-first. What would feel wrong: startup gloss, a Plex lookalike, a wall of text, or being too serious. Form: "pretty much standard", one continuous scroll of big feature moments, download and GitHub links at the top and again at the bottom. Craft bar: raycast.com.

**Unresolved:** copy is drafted from README wording and awaits the owner's rewrite. The ramus repo does not yet send the `ramus-release` dispatch, so new releases reach the site through the daily rebuild.

## Direction contract

THESIS: ramus's own trick applied to its own page. One continuous dark scroll in which each big feature lands once, at full size, shown working rather than described, and the page re-tints from the album art on screen the way the app does. It refuses the gradient-glow hero over a grid of identical feature cards.

OWN-WORLD: a near-black ground tinted per section from the album art in that section's screenshot, with the logo's coral as the only constant accent (download buttons, focus rings). The main material is real app UI: full-colour screenshots and loops in rounded window frames, plus a live genre tree drawn in the app's own sidebar style. Type: lowercase Bricolage Grotesque display set in two tones (a bright statement, then a dimmed continuation), Inter body to match the app, JetBrains Mono for files, sizes and versions. Floating translucent nav.

STORY: the visitor understands that ramus shows their Plex library as a tree of genres, believes it from the live tree and the real screenshots, sees each major feature once, and leaves with the right installer or the repo, with requirements and the unsigned-build caveat stated plainly.

FIRST VIEWPORT: a floating nav (logo mark and "ramus"; GitHub; a coral Download). A centred lowercase H1, "a genre-first music player for plex", at about 88px, with a dimmed continuation line. Under it, a coral button for the visitor's OS with its requirement, then "other platforms" and GitHub with the current version. Rising into the lower third: the real hero screenshot in a window frame, tilted back in perspective and flattening as the page scrolls.

FORM: category standard (the owner took the standing exit), executed at the raycast.com craft bar; seed key 97e0c46f. Signature interaction: a live genre explorer over the real bundled tree, where typing finds a genre and shows its path. Motion grammar: scroll-driven reveals on CSS view timelines and section re-tinting; with reduced motion everything is static and visible.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
