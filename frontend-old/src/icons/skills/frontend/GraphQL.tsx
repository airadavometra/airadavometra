import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const GraphQL: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0a2.1 2.1 0 1 0 0 4.3A2.1 2.1 0 1 0 12 0zm8.5 5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 1 0 0-4.3zm0 9.8a2.1 2.1 0 1 0 0 4.3 2.1 2.1 0 1 0 0-4.3zm-8.5 5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 1 0 0-4.3zm-8.5-5a2.1 2.1 0 1 0 0 4.3 2.1 2.1 0 1 0 0-4.3zm0-9.9a2.1 2.1 0 1 0 0 4.3 2.1 2.1 0 1 0 0-4.3zM12 1.6 3 6.8v10.4l9 5.2 9-5.2V6.8zm0 1.6 7.7 13.2H4.3zm-1.4.3L4 15V7.4zm2.8 0L20 7.4V15zm-8 14h13.2L12 21.2z" />
    </svg>
  );
};
