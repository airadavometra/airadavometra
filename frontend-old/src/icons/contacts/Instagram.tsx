import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Instagram: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 39"
    >
      <path d="M33.2 38.7H7a6.3 6.3 0 0 1-6.3-6.3V6.3C.7 2.8 3.6 0 7 0h26.2c3.5 0 6.3 2.8 6.3 6.3v26c0 3.5-2.8 6.4-6.3 6.4ZM13.7 8h13a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5h-13a5 5 0 0 1-5-5V13a5 5 0 0 1 5-5Zm0-3a8 8 0 0 0-8 8v13a8 8 0 0 0 8 8h13a8 8 0 0 0 8-8V13a8 8 0 0 0-8-8h-13Zm6.5 21.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-3a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.5-9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
};
