// Resolves the latest ramus release from the GitHub API at build time, so the
// published page carries direct download links and visitors' browsers never
// contact a third party. Release asset names carry the version
// (ramus_2.1.0_x64-setup.exe), so each platform is matched by pattern.

const REPO = "1337raspberry/ramus";
const API = `https://api.github.com/repos/${REPO}/releases/latest`;

export const RELEASES_URL = `https://github.com/${REPO}/releases`;
export const REPO_URL = `https://github.com/${REPO}`;
export const SIDESTORE_SOURCE = "https://1337raspberry.github.io/ramus.json";

export type PlatformId = "macos" | "windows" | "linux" | "ios" | "android";

export interface Download {
  /** Short label for the file type, e.g. "AppImage" or "installer". */
  label: string;
  /** Architecture or variant note, e.g. "x86_64"; empty when there is only one. */
  arch: string;
  file: string;
  url: string;
  bytes: number;
}

export interface Platform {
  id: PlatformId;
  name: string;
  requirement: string;
  /** The file most visitors on this platform want; null when the release lacks it. */
  primary: Download | null;
  others: Download[];
}

export interface Release {
  version: string;
  tag: string;
  url: string;
  published: Date;
  platforms: Platform[];
}

interface Asset {
  name: string;
  size: number;
  browser_download_url: string;
}

interface Rule {
  label: string;
  arch: string;
  match: RegExp;
}

interface PlatformSpec {
  id: PlatformId;
  name: string;
  requirement: string;
  /** Ordered by preference; the first rule that matches becomes the primary download. */
  rules: Rule[];
}

const PLATFORMS: PlatformSpec[] = [
  {
    id: "macos",
    name: "macOS",
    requirement: "macOS 15 or newer, Apple Silicon",
    // Releases after 2.1.0 ship an aarch64 image; 2.1.0 and earlier shipped universal.
    rules: [
      { label: "disk image", arch: "", match: /_aarch64\.dmg$/ },
      { label: "disk image", arch: "", match: /_universal\.dmg$/ },
    ],
  },
  {
    id: "windows",
    name: "Windows",
    requirement: "Windows 10 or 11, x64",
    rules: [
      { label: "installer", arch: "", match: /_x64-setup\.exe$/ },
      { label: "msi", arch: "", match: /_x64_[\w-]+\.msi$/ },
    ],
  },
  {
    id: "linux",
    name: "Linux",
    requirement: "WebKitGTK 4.1, e.g. Ubuntu 24.04+ or Debian 13+",
    rules: [
      { label: "AppImage", arch: "x86_64", match: /_(amd64|x86_64)\.AppImage$/ },
      { label: "AppImage", arch: "ARM64", match: /_(aarch64|arm64)\.AppImage$/ },
      { label: "deb", arch: "x86_64", match: /_amd64\.deb$/ },
      { label: "deb", arch: "ARM64", match: /_arm64\.deb$/ },
      { label: "rpm", arch: "x86_64", match: /\.x86_64\.rpm$/ },
      { label: "rpm", arch: "ARM64", match: /\.aarch64\.rpm$/ },
    ],
  },
  {
    id: "ios",
    name: "iOS",
    requirement: "iOS 17.5 or newer, sideloaded",
    rules: [{ label: "ipa", arch: "", match: /_ios[\w-]*\.ipa$/ }],
  },
  {
    id: "android",
    name: "Android",
    requirement: "Android 8.0 or newer",
    rules: [{ label: "apk", arch: "", match: /\.apk$/ }],
  },
];

function resolvePlatform(spec: PlatformSpec, assets: Asset[]): Platform {
  const found: Download[] = [];
  const seenFiles = new Set<string>();
  const seenKinds = new Set<string>();

  for (const rule of spec.rules) {
    const kind = `${rule.label}|${rule.arch}`;
    if (seenKinds.has(kind)) continue;
    const asset = assets.find((a) => rule.match.test(a.name) && !seenFiles.has(a.name));
    if (!asset) continue;
    seenFiles.add(asset.name);
    seenKinds.add(kind);
    found.push({
      label: rule.label,
      arch: rule.arch,
      file: asset.name,
      url: asset.browser_download_url,
      bytes: asset.size,
    });
  }

  if (found.length === 0) {
    console.warn(`[release] no ${spec.name} asset matched in the latest release`);
  }

  return {
    id: spec.id,
    name: spec.name,
    requirement: spec.requirement,
    primary: found[0] ?? null,
    others: found.slice(1),
  };
}

async function fetchLatest(): Promise<Release> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // CI passes the workflow token to lift the unauthenticated rate limit.
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(API, { headers });
  if (!res.ok) {
    // Failing the build keeps the previous deployment live rather than
    // publishing a page with no download links.
    throw new Error(`[release] GitHub API returned ${res.status} for ${API}`);
  }
  const data = (await res.json()) as {
    tag_name: string;
    html_url: string;
    published_at: string;
    assets: Asset[];
  };

  return {
    tag: data.tag_name,
    version: data.tag_name.replace(/^v/, ""),
    url: data.html_url,
    published: new Date(data.published_at),
    platforms: PLATFORMS.map((spec) => resolvePlatform(spec, data.assets)),
  };
}

let cached: Promise<Release> | undefined;

/** The latest published release, fetched once per build. */
export function getLatestRelease(): Promise<Release> {
  cached ??= fetchLatest();
  return cached;
}

/** File size in the units a download button shows, e.g. "46 MB". */
export function formatBytes(bytes: number): string {
  const mb = bytes / 1_000_000;
  return mb >= 10 ? `${Math.round(mb)} MB` : `${mb.toFixed(1)} MB`;
}
