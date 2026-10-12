/**
 * Fetch an SVG uploaded to the CMS (at build time) and return markup that is
 * safe to inline: no scripts, event handlers, foreignObject or javascript:
 * links. The SVG is decorative, so it is hidden from assistive tech.
 * Returns null, with a build warning, when the file isn't a usable SVG.
 */
export async function inlineSvg(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    const type = response.headers.get("content-type") ?? "";
    if (!response.ok || !type.includes("image/svg+xml")) {
      console.warn(`Skipping icon ${url}: ${response.status} ${type}`);
      return null;
    }

    const markup = (await response.text())
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<foreignObject[\s\S]*?<\/foreignObject>/gi, "")
      .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(/(href\s*=\s*["'])\s*javascript:[^"']*/gi, "$1#");

    const start = markup.search(/<svg[\s>]/i);
    if (start === -1) return null;
    return markup
      .slice(start)
      .trim()
      .replace(/^<svg/i, '<svg aria-hidden="true" focusable="false"');
  } catch (error) {
    console.warn(`Skipping icon ${url}:`, error);
    return null;
  }
}
