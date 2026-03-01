import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Css3: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 0h21l-2 21.6L12 24l-8.6-2.4L1.5 0zm17 4.4h-13L5.5 7h10.1l-.2 2.8H8.9l.2 2.5h6.2l-.4 3.5-2.9.8-3-.8-.1-2H6.2l.3 3.8 5.5 1.7 5.4-1.5 1.2-13.4z" />
    </svg>
  );
};
