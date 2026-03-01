import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Expand: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
      />
    </svg>
  );
};
