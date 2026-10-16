import type { SvgComponent } from "astro/types";
import Html from "../assets/skills/html5.svg";
import Css from "../assets/skills/css.svg";
import JavaScript from "../assets/skills/javascript.svg";
import TypeScript from "../assets/skills/typescript.svg";
import ReactIcon from "../assets/skills/react.svg";
import NextJs from "../assets/skills/nextjs.svg";
import AstroIcon from "../assets/skills/astro.svg";
import Vite from "../assets/skills/vite.svg";
import Redux from "../assets/skills/redux.svg";
import Zustand from "../assets/skills/zustand.svg";
import GraphQl from "../assets/skills/graphql.svg";
import Sanity from "../assets/skills/sanity.svg";
import Firebase from "../assets/skills/firebase.svg";
import Accessibility from "../assets/skills/accessibility.svg";

export interface Skill {
  name: string;
  /** A single-colour SVG. It's inlined and filled with the brand blue. */
  icon: SvgComponent;
}

export const skills: Skill[] = [
  { name: "HTML", icon: Html },
  { name: "CSS", icon: Css },
  { name: "JavaScript", icon: JavaScript },
  { name: "TypeScript", icon: TypeScript },
  { name: "React", icon: ReactIcon },
  { name: "NextJS", icon: NextJs },
  { name: "Astro", icon: AstroIcon },
  { name: "Vite", icon: Vite },
  { name: "Redux", icon: Redux },
  { name: "Zustand", icon: Zustand },
  { name: "GraphQL", icon: GraphQl },
  { name: "Sanity", icon: Sanity },
  { name: "Firebase", icon: Firebase },
  { name: "Accessibility", icon: Accessibility },
];
