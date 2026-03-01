import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Figma: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.9 9h-4.6V0h4.6a4.5 4.5 0 0 1 0 9zm-3.2-1.5H16a3 3 0 0 0 0-6h-3.2v6zm0 1.5H8.1a4.5 4.5 0 0 1 0-9h4.6v9zM8.1 1.5a3 3 0 0 0 0 6h3.2v-6H8zm4.6 15H8.1a4.5 4.5 0 0 1 0-9h4.6v9zM8.1 9a3 3 0 0 0 0 6h3.2V9H8zm0 15c-2.4 0-4.4-2-4.4-4.5S5.7 15 8 15h4.6v4.5c0 2.5-2 4.5-4.5 4.5zm0-7.5a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3.2-3v-3H8zm7.8 0h-.1a4.5 4.5 0 0 1 0-9 4.5 4.5 0 0 1 0 9zM15.8 9a3 3 0 0 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  );
};
