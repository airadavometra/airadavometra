import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const NextJS: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.6 0a5.1 5.1 0 0 0-.7 0 12 12 0 1 0 6.8 22.5s-1-1.1-2-2.6l-1.9-2.6-2.4-3.5L9 10.2a194 194 0 0 0 0 7.1l-.3.2h-1a.4.4 0 0 1-.2-.2V7.7l.3-.2h.5l.7.1 2.9 4.4a10760.4 10760.4 0 0 0 4.7 7.1l2 3V22a12.3 12.3 0 0 0 5.3-8.3L24 12l-.1-1.7A12 12 0 0 0 11.6 0zm4 7.2h.5l.3.3v8.6l-.8-1.2-.7-1.1v-3a91.9 91.9 0 0 1 .2-3.5h.5z" />
    </svg>
  );
};
