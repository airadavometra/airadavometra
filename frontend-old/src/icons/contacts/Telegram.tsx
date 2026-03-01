import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Telegram: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5 7.2.4.2a.5.5 0 0 1 .1.3v.5c-.1 1.9-.9 6.5-1.3 8.6-.2.9-.5 1.2-.8 1.2-.7 0-1.2-.4-2-.9l-2.6-1.8c-1.2-.8-.4-1.2.3-1.9l3.3-3.2V10H14c-.1 0-1.8 1-5.1 3.3-.5.3-1 .5-1.3.5-.4 0-1.3-.3-1.9-.5-.7-.2-1.3-.3-1.3-.8A556.4 556.4 0 0 1 17 7.2z" />
    </svg>
  );
};
