import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const FramerMotion: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
    >
      <path d="M0 0h150v150H0Z" fill="none" data-name="Layer 2" />
      <path d="M13.2 137.2V12.3l62.4 62.4L138 12.3v124.9l-31.2-31.3-31.2 31.3-31.2-31.3Z" />
    </svg>
  );
};
