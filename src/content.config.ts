import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// The page's content lives in Markdown files in src/content/. A file's body is
// its long text (blank lines separate paragraphs); everything else is
// frontmatter, checked against these schemas at build time. Image paths are
// relative to the Markdown file.

const home = defineCollection({
  loader: glob({ pattern: "home.md", base: "./src/content" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image(),
      about: z.object({
        title: z.string(),
        subtitle: z.string(),
        image: image(),
      }),
      experienceYears: z.number(),
      skills: z.array(z.object({ name: z.string(), icon: z.string() })),
      githubLink: z.url(),
      linkedinLink: z.url(),
      email: z.email(),
      contact: z.object({ title: z.string(), image: image() }),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/experience" }),
  schema: z.object({
    title: z.string(),
    duration: z.string(),
    /** Position in the list, from 1 */
    order: z.number(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.coerce.string(),
      /** Without a link the title is plain text */
      link: z.url().optional(),
      tags: z.array(z.string()),
      /** The first is the cover; the thumbnail strip only shows with two or more */
      screenshots: z.array(image()).min(1),
      /** Position in the list, from 1 */
      order: z.number(),
    }),
});

const manga = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/manga" }),
  schema: ({ image }) =>
    z.object({
      /** Read out to screen readers as "Manga panel: <title>" */
      title: z.string(),
      placement: z.enum(["after-about", "after-experience", "after-projects"]),
      panels: z.array(z.object({ src: image(), alt: z.string() })).min(1),
    }),
});

export const collections = { home, experience, projects, manga };
