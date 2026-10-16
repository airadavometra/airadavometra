import { track } from "@vercel/analytics";

/**
 * One delegated click listener for the whole page. Mark an element with
 * `data-track="event_name"` and optional `data-track-<prop>="value"`, e.g.
 * `<a data-track="cv_download" data-track-location="header">`.
 *
 * Custom events are only recorded on Vercel's Pro plan; on Hobby `track()` is a no-op.
 */
export const initClickTracking = () => {
  document.addEventListener("click", (event) => {
    const element = (event.target as Element | null)?.closest<HTMLElement>(
      "[data-track]",
    );
    const name = element?.dataset.track;
    if (!element || !name) return;

    const props: Record<string, string> = {};
    for (const [key, value] of Object.entries(element.dataset)) {
      // data-track-project-name -> dataset.trackProjectName -> projectName
      if (key.startsWith("track") && key !== "track" && value !== undefined) {
        props[key.charAt(5).toLowerCase() + key.slice(6)] = value;
      }
    }
    track(name, props);
  });
};
