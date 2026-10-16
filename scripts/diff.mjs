// Compare two folders of screenshots made by scripts/screenshot.mjs.
//
// Usage: node scripts/diff.mjs <before-dir> <after-dir>
//
// Prints, per file, whether the size changed and what share of pixels differ.
// A changed pixel is one where any channel differs by more than 8 (anti-aliasing noise).
import sharp from "sharp";
import { readdir } from "node:fs/promises";
import { join } from "node:path";

const [before, after] = process.argv.slice(2);
if (!before || !after) {
  console.error("Usage: node scripts/diff.mjs <before-dir> <after-dir>");
  process.exit(2);
}

const raw = (file) =>
  sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const files = (await readdir(before)).filter((name) => name.endsWith(".png"));
let changed = 0;

for (const name of files) {
  const a = await raw(join(before, name));
  const b = await raw(join(after, name)).catch(() => null);
  if (!b) {
    console.log(`${name}: missing in ${after}`);
    changed++;
    continue;
  }
  if (a.info.width !== b.info.width || a.info.height !== b.info.height) {
    console.log(
      `${name}: size ${a.info.width}×${a.info.height} → ${b.info.width}×${b.info.height}`,
    );
    changed++;
    continue;
  }
  let diff = 0;
  for (let i = 0; i < a.data.length; i += 4) {
    for (let c = 0; c < 3; c++) {
      if (Math.abs(a.data[i + c] - b.data[i + c]) > 8) {
        diff++;
        break;
      }
    }
  }
  const share = (diff / (a.data.length / 4)) * 100;
  if (diff) changed++;
  console.log(
    `${name}: ${diff ? `${share.toFixed(3)}% pixels differ` : "identical"}`,
  );
}

process.exitCode = changed ? 1 : 0;
