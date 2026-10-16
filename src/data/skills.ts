import type { ComponentProps } from "astro/types";
import type { Icon } from "astro-icon/components";

export interface Skill {
  name: string;
  /**
   * An icon from an installed pack, as "pack:name". Logos come from Simple
   * Icons (https://simpleicons.org), others from Devicon or IcoMoon. It must be
   * single-colour: CSS fills it with the brand blue.
   */
  icon: ComponentProps<typeof Icon>["name"];
}

export const skills: Skill[] = [
  { name: "HTML", icon: "simple-icons:html5" },
  { name: "CSS", icon: "simple-icons:css" },
  { name: "JavaScript", icon: "simple-icons:javascript" },
  { name: "TypeScript", icon: "simple-icons:typescript" },
  { name: "React", icon: "simple-icons:react" },
  { name: "NextJS", icon: "simple-icons:nextdotjs" },
  { name: "Astro", icon: "simple-icons:astro" },
  { name: "Vite", icon: "simple-icons:vite" },
  { name: "Redux", icon: "simple-icons:redux" },
  { name: "Zustand", icon: "devicon-plain:zustand" },
  { name: "GraphQL", icon: "simple-icons:graphql" },
  { name: "Sanity", icon: "simple-icons:sanity" },
  { name: "Firebase", icon: "simple-icons:firebase" },
  { name: "Accessibility", icon: "icomoon-free:accessibility" },
];
