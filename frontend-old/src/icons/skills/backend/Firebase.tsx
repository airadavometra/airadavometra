import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Firebase: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.9 15.7 6.3.5a.5.5 0 0 1 1-.2L9.8 5zm16.8 3.7-2.3-14a.5.5 0 0 0-.9-.3L3.3 19.4l7.9 4.4a1.6 1.6 0 0 0 1.6 0zM14.3 7l-1.8-3.4a.5.5 0 0 0-1 0L3.5 18z" />
    </svg>
  );
};
