// Regenerates src/data/genres.json from the genre tree bundled with ramus.
// Usage: node scripts/sync-genres.mjs <path to ramus-tauri/data/open.json>
//
// The tree ships with the app (derived from the beets project's
// genres-tree.yaml, MIT, (c) Adrian Sampson). The site keeps only what the
// explorer needs: names, alternative names and nesting.
import { readFileSync, writeFileSync } from "node:fs";

const source = process.argv[2];
if (!source) {
  console.error("usage: node scripts/sync-genres.mjs <path/to/open.json>");
  process.exit(1);
}

const { genres } = JSON.parse(readFileSync(source, "utf8"));

const trim = (node) => {
  const out = { n: node.name };
  const aka = (node.aka ?? []).filter(
    (a) => a.toLowerCase() !== `${node.name.toLowerCase()} music`,
  );
  if (aka.length) out.a = aka;
  const children = (node.children ?? []).map(trim);
  if (children.length) out.c = children;
  return out;
};

const tree = genres.map(trim);
const target = new URL("../src/data/genres.json", import.meta.url);
writeFileSync(target, JSON.stringify(tree));

let count = 0;
const names = new Set();
const walk = (nodes) => nodes.forEach((g) => { count++; names.add(g.n.toLowerCase()); if (g.c) walk(g.c); });
walk(tree);
console.log(`wrote ${count} nodes (${names.size} unique genres) to src/data/genres.json`);
