import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Html5: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 0h21l-2 21.6L12 24l-8.6-2.4L1.5 0zm7 9.8L8.3 7h10l.3-2.6H5.4l.7 8h9.1l-.3 3.4-2.9.8-3-.8-.1-2H6.2l.4 4.1 5.4 1.5 5.4-1.5.7-8.1H8.5z" />
    </svg>
  );
};
