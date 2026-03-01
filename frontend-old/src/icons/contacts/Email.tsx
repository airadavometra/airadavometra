import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Email: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M0 246.2v229.9l209.8-114.5zm492.5-38.7L270.4 5.5a21.3 21.3 0 0 0-28.8 0L19 208l235.3 129.4 238.2-130zM272.3 376.1a21 21 0 0 1-13.8 7.6L23.2 512h467.5c11.8 0 21.3-9.6 21.3-21.3V245.4L272.3 376z" />
    </svg>
  );
};
