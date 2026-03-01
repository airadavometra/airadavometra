import { Css3 } from "@/icons/skills/frontend/Css3";
import { Html5 } from "@/icons/skills/frontend/Html5";
import { JavaScript } from "@/icons/skills/frontend/JavaScript";
import { TypeScript } from "@/icons/skills/frontend/TypeScript";
import { React } from "@/icons/skills/frontend/React";
import { Redux } from "@/icons/skills/frontend/Redux";
import { NextJS } from "@/icons/skills/frontend/NextJS";
import { PostCss } from "@/icons/skills/frontend/PostCss";
import { StyledComponents } from "@/icons/skills/frontend/StyledComponents";
import { FramerMotion } from "@/icons/skills/frontend/FramerMotion";
import { GraphQL } from "@/icons/skills/frontend/GraphQL";
import { Figma } from "@/icons/skills/design/Figma";
import { Photoshop } from "@/icons/skills/design/Photoshop";
import { Firebase } from "@/icons/skills/backend/Firebase";
import { SkillInfo } from "@/types/skillInfo";

export const SKILLS: SkillInfo[] = [
  {
    skillName: "Front-end",
    skillLogos: [
      { logo: Html5, logoAlt: "HTML5" },
      { logo: Css3, logoAlt: "CSS3" },
      { logo: TypeScript, logoAlt: "TypeScript" },
      { logo: JavaScript, logoAlt: "JavaScript" },
      { logo: React, logoAlt: "React" },
      { logo: Redux, logoAlt: "Redux" },
      { logo: NextJS, logoAlt: "Next JS" },
      { logo: PostCss, logoAlt: "PostCSS" },
      { logo: StyledComponents, logoAlt: "styled-components" },
      { logo: FramerMotion, logoAlt: "Framer Motion" },
      { logo: GraphQL, logoAlt: "GraphQL" },
    ],
  },
  {
    skillName: "Design",
    skillLogos: [
      { logo: Figma, logoAlt: "Figma" },
      { logo: Photoshop, logoAlt: "Adobe Photoshop" },
    ],
  },
  {
    skillName: "Back-end",
    skillLogos: [{ logo: Firebase, logoAlt: "Firebase" }],
  },
];
