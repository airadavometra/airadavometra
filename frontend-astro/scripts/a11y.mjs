// Run axe (WCAG 2.x A/AA) against the site at desktop and mobile widths.
//
// Usage: node scripts/a11y.mjs [--url http://localhost:4321]
//
// The full-page texture overlays (body::before/::after) make axe report colour
// contrast as "incomplete" instead of failing it, which is why Lighthouse shows a
// false 100. This script hides them before scanning so contrast is really checked.
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";
import { parseArgs } from "node:util";

const { values } = parseArgs({
  options: { url: { type: "string", default: "http://localhost:4321" } },
});

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium
  .launch({ channel: "chrome" })
  .catch(() => chromium.launch());
let total = 0;

for (const viewport of viewports) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  await page.goto(values.url, { waitUntil: "networkidle" });
  await page.addStyleTag({
    content: "body::before, body::after { display: none !important; }",
  });

  const { violations } = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();

  for (const violation of violations) {
    total += violation.nodes.length;
    console.log(
      `[${viewport.name}] ${violation.id} (${violation.impact}): ${violation.help}`,
    );
    for (const node of violation.nodes) {
      console.log(`    ${node.target.join(" ")}`);
    }
  }
  await context.close();
}

await browser.close();
console.log(total ? `${total} violation(s)` : "No axe violations");
process.exitCode = total ? 1 : 0;
