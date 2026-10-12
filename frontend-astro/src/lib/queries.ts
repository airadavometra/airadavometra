import { defineQuery } from "groq";
import type { PageQueryResult } from "../sanity/types";

// The whole page is built from this one query. Its result type is generated
// into src/sanity/types.ts by `npm run typegen` in cms/.
// Images are projected whole so crop, hotspot and alt reach the components.
export const pageQuery = defineQuery(`{
  "settings": *[_type == "settings"][0] {
    siteTitle,
    metaDescription,
    favicon,
    shareImage
  },
  "home": *[_type == "homePage"][0] {
    title,
    heroImage,
    aboutMeImage,
    aboutMeTitle,
    aboutMeSubtitle,
    aboutMeDescription,
    "cvUrl": cvFile.asset->url,
    experienceYears,
    experience[] { _key, title, duration, description },
    skills[] { _key, name, "iconUrl": icon.asset->url },
    projects[] { _key, title, year, link, description, tags, screenshots },
    githubLink,
    linkedinLink,
    email,
    contactSectionTitle,
    contactSectionImage,
    featuredManga1-> { title, images },
    featuredManga2-> { title, images },
    featuredManga3-> { title, images }
  }
}`);

export type Settings = NonNullable<PageQueryResult["settings"]>;
export type Home = NonNullable<PageQueryResult["home"]>;
export type Manga = NonNullable<Home["featuredManga1"]>;
