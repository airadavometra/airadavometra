import { FC } from "react";
import { WithClassName } from "./withClassName";

export type SkillLogo = {
  logo: FC<WithClassName>;
  logoAlt: string;
};
