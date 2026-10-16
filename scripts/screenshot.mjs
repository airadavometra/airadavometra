// Screenshot the site at the viewports used by the design audit (1440×900, 390×844).
//
// Usage: node scripts/screenshot.mjs [--url http://localhost:4321] [--out dir] [--elements "#about,#projects"]
//
// For each viewport it saves the first screen ("fold"), the full page, and optionally
// one image per --elements selector. Console errors and failed requests are printed.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: {
    url: { type: "string", default: "http://localhost:4321" },
    out: { type: "string", default: join(tmpdir(), "portfolio-screenshots") },
    elements: { type: "string", default: "" },
  },
});

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const launch = async () => {
  try {
    return await chromium.launch({ channel: "chrome" });
  } catch {
    // No system Chrome: run `npx playwright install chromium` once.
    return chromium.launch();
  }
};

// Scroll to the bottom so lazy-loaded images are fetched before the full-page capture.
// Scrolls are instant: the site sets `scroll-behavior: smooth`, and an animating
// scroll would put the fixed header at a random spot in the full-page image.
const loadLazyImages = async (page) => {
  await page.evaluate(async () => {
    const scroll = (top) => window.scrollTo({ top, behavior: "instant" });
    for (
      let y = 0;
      y < document.body.scrollHeight;
      y += window.innerHeight / 2
    ) {
      scroll(y);
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    scroll(0);
  });
  await page.waitForLoadState("networkidle");
};

await mkdir(values.out, { recursive: true });
const browser = await launch();
const problems = [];

for (const viewport of viewports) {
  const page = await browser.newPage({
    viewport: { width: viewport.width, height: viewport.height },
  });
  // Vercel Analytics (/_vercel/insights) is only served on Vercel, so it 404s locally.
  page.on("console", (msg) => {
    if (msg.type() === "error" && !msg.location().url.includes("/_vercel/")) {
      problems.push(`[${viewport.name}] console: ${msg.text()}`);
    }
  });
  page.on("requestfailed", (req) => {
    if (!req.url().includes("/_vercel/")) {
      problems.push(`[${viewport.name}] failed: ${req.url()}`);
    }
  });

  await page.goto(values.url, { waitUntil: "networkidle" });
  await page.screenshot({
    path: join(values.out, `${viewport.name}-fold.png`),
    animations: "disabled",
  });

  await loadLazyImages(page);
  await page.screenshot({
    path: join(values.out, `${viewport.name}-full.png`),
    fullPage: true,
    animations: "disabled",
  });

  for (const selector of values.elements.split(",").filter(Boolean)) {
    const element = page.locator(selector).first();
    const name = selector.replace(/[^a-z0-9-]/gi, "");
    await element.scrollIntoViewIfNeeded();
    await element.screenshot({
      path: join(values.out, `${viewport.name}-${name}.png`),
      animations: "disabled",
    });
  }

  await page.close();
}

await browser.close();
console.log(`Screenshots saved to ${values.out}`);
if (problems.length) console.log(problems.join("\n"));
