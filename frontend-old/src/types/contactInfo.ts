import { FC } from "react";
import { WithClassName } from "./withClassName";

export type ContactInfo = {
  contactLogo: FC<WithClassName>;
  contactText: string;
  contactLink?: string;
  contactValue?: string;
};
