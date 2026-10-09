# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: **Astro**, static output, deployed by GitHub Actions to GitHub Pages from this repository. The brief was "something vaguely modern" for one page, or a few at most. Astro fits that brief: it uses a current toolchain, its components keep the download table and repeated sections from becoming copy-paste, it optimises the screenshot images, and by default it ships no client JavaScript.

Hosting: this repository is a GitHub Pages project site, served at **ramusplayer.app**. See Capabilities and Constraints for the domain rule that protects the SideStore feed.

## Users

Owners of a Plex Media Server with a music library, from casual listeners to genre obsessives and taxonomy purists who tag their own music. They arrive deciding whether ramus is worth installing, and they should leave with the right build for their device.

## Product Purpose

The site pitches ramus and hands out download links. It is pure pitch and download: one page, a few at most.

ramus is a free, open-source, genre-first music client for Plex, for macOS, Windows, Linux, iOS and Android. It is built around discovering and exploring a library you already own. Out of the box it reads the Genre and Style metadata Plex already fetches for albums and shows the library as a hierarchical genre tree; people who want more control can supply their own tags and their own hierarchy.

Success: a visitor understands what genre-first browsing would do for their own library, and gets an installer they can run, with honest expectations about requirements and unsigned builds.

## Positioning

- **Genre as a tree, not a flat tag list.** The bundled hierarchy holds 1,579 genres in 21 top-level branches, up to six levels deep (counted from `ramus-tauri/data/open.json`). It is derived from the beets project's genre tree and substantially extended. It matches an existing library automatically, with no retagging required. Custom hierarchies can be built, imported and shared as `.txt` files.
- **Made by one person for their own library.** The idea took more than a decade and four attempts: a foobar2000 plugin, a Java proof of concept, a Swift macOS app, and now this. The maker has used ramus daily on several platforms for months. The launch video ends on "i made it for myself. you can use it too if you want".
- **Free, with no catch.** MIT-licensed source, no ads, no money wanted, and no telemetry, analytics, crash reporters or auto-updaters ("Not ever."). It talks only to the Plex server, plex.tv, lrclib (when lyrics are requested) and local players when casting.
- **One audio engine everywhere.** libmpv runs on all five platforms, so behaviour is the same across them (with the Android gaps listed below).

## Operating Context

- Visitors arrive on desktop or phone. Downloads come from GitHub Releases, attached by the `release.yml` workflow in `1337raspberry/ramus`.
- Release asset names carry the version (`ramus_<version>_aarch64.dmg`, `ramus_<version>_x64-setup.exe`, ...), so a fixed "latest" asset URL can't be built from a static name.
- Builds and requirements per platform:
  - **macOS:** `.dmg`; macOS 15 (Sequoia) or newer, Apple Silicon only, no Intel.
  - **Windows:** NSIS `.exe` or `.msi`; Windows 10/11 x64, WebView2.
  - **Linux:** AppImage, `.deb` and `.rpm` for x86_64 and ARM; WebKitGTK 4.1. The `.deb`/`.rpm` need the system libmpv; the AppImage bundles it.
  - **iOS:** ad-hoc `.ipa`, or the SideStore source; iOS 17.5 or newer.
  - **Android:** universal `.apk`; Android 8.0 (API 26) or newer.
  - **Everyone:** needs a Plex Media Server they can sign into, with a music library.
- Releases are unsigned or self-signed. macOS Gatekeeper calls the app "damaged" or unverifiable, Windows SmartScreen warns, and Android Play Protect asks to scan it. The Releases page carries the workarounds.
- First run syncs the library into a local cache (minutes, even on large remote libraries); later syncs are incremental.

## Capabilities and Constraints

**In scope:** the pitch, and download links for every platform plus the SideStore source.

**Out of scope (the maker chose these out):** install walkthroughs, a user guide (search operators, filters, crates, hierarchy format) and a hierarchy-sharing gallery. The README and the Releases page cover them; the site links out.

**App features the pitch can draw on** (all real and shipping): hierarchical genre browsing; instant locally cached search with typo tolerance and operators (`/Dream-Pop AND year:>2013`); smart filters saved as bookmarks and downloadable for offline play; album-art grid browsing with background and accent colours extracted from the artwork; waveform seeking (needs Sonic Analysis on the server); track popularity from Plex; the pulsar visualiser and full-screen focus mode; synced lyrics from lrclib; discovery crates that sync back to the server as playlists; a standalone genre-editor tool for building trees.

**Known gaps that must not be glossed over:** Android has no visualiser and no EQ. Search album matching is limited to 50k albums. There is no App Store or Play Store listing.

**Hard constraints:**
- The SideStore feed URL `https://1337raspberry.github.io/ramus.json` must never change or redirect; installed clients poll it, and a release bot commits to it in the `1337raspberry.github.io` repository.
- Set the custom domain on **this** repository, never on the `1337raspberry.github.io` user site. A custom domain on the user site moves every project site of the account, and the feed, under that domain.
- `.app` is an HSTS-preloaded TLD: browsers only ever load it over HTTPS, so the site is unreachable until GitHub Pages has issued its certificate for the domain.
- Download links always point at the latest GitHub release, resolved automatically from the release's asset names; nobody edits version numbers by hand.
- No analytics, trackers, cookies or third-party requests made on page load. This matches the app's "no telemetry, not ever" promise.
- The launch film is on the site too. The existing video page at `1337raspberry.github.io/ramus/` stays as it is, because the README banner links to it.
- ramus is an independent third-party client, not affiliated with, endorsed by or sponsored by Plex. Copy must not imply otherwise, and the site carries that line.
- Licensing: the source is MIT. Some release builds (macOS, Linux AppImage, Android) bundle GPL builds of libmpv/FFmpeg and are distributed as a whole under GPL-3.0-or-later. Any licence statement on the site must not say "MIT" about the binaries.

## Brand Commitments

- **Name:** `ramus`, always lowercase. Tagline as published (README subtitle, video page meta): "a genre-first music player for plex".
- **Logo:** `docs/ramuslogo.png` and the app icons in `ramus-tauri/icons/` (in the ramus repository), drawn by the maker. Use them as they are.
- **Voice:** lowercase, dry, self-deprecating, first person, from a sysadmin who says plainly they are not a software developer. Where the maker's own words exist (the README, the launch video), use them verbatim.
- **No generative AI in creative work.** Imagery is only real app screenshots, the launch-video loops and frames, and graphics drawn in code; never generated. Claude may draft copy from the README's wording, and the maker rewrites it in their own voice before it ships.
- **Site form:** a conventional product page, executed to a high finish rather than reinvented. One continuous scroll of large feature moments, with download and GitHub links at the top and again at the bottom. The craft bar is raycast.com. Avoid the obvious tells: startup gloss, a grid of identical feature cards, anything resembling Plex's branding, walls of text.
- **Identity:** the only identity shown is the GitHub handle `1337raspberry` (and `admin@blueshelter.net` if a contact address is ever needed).

## Evidence on Hand

In the ramus repository (`github.com/1337raspberry/ramus`):
- Screenshots (`docs/screenshots/*.webp`): `hero`, `search`, `focus`, `artist`, `popular`, `filters`, `mobile-library`, `mobile-np`, `mobile-np-lyrics`.
- Animated WebP loops (`docs/loops/`): `genre-tree`, `filters`, `pulsar`.
- Logo `docs/ramuslogo.png`; the README banner `docs/video-cover.webp` (1600×560).
- The launch film (about 60 s, 1080p, with its own score) and its poster: `ramus/ramus.mp4` and `ramus/poster.jpg` in the `1337raspberry.github.io` repository. Its source project, kept outside this repository, renders the app's own CSS with a real library and can produce more stills and loops on request.

Absent, and must not be invented: testimonials, user or download counts, reviews, press, star counts presented as proof, App Store or Play Store presence.

## Product Principles

1. **Show the real thing.** Every image is ramus running on a real library. No mockups dressed up as product, no generated art.
2. **The tree is the pitch.** Genre-first browsing is the reason ramus exists. Every other feature supports that claim and never competes with it.
3. **Right build, fast, honestly.** Each visitor finds their platform's installer quickly, with requirements and the unsigned-build caveat stated plainly, not buried.
4. **Sound like the person who made it.** No marketing gloss, no borrowed proof, nothing the app doesn't actually do.
