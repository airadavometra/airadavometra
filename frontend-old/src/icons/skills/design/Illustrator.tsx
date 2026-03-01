import { WithClassName } from "@/types/withClassName";
import { FC } from "react";

export const Illustrator: FC<WithClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m10.5 10.7-.3-.9L10 9l-.2-.8-.4 1.3-.5 1.5-.4 1.4H11a14.2 14.2 0 0 0-.5-1.6zM19.8.3H4.2A4.2 4.2 0 0 0 0 4.6v14.9c0 2.3 1.9 4.2 4.3 4.2h15.4c2.4 0 4.3-1.9 4.3-4.3V4.6C24 2.2 22.1.3 19.7.3zm-5.1 16.5h-2.3l-.8-2.5H8l-.8 2.4-.1.1H5v-.1l3.2-9.3V7l.1-.6.1-.1h2.7l3.7 10.4-.1.1zm3.4-.1-.1.1h-2l-.1-.1V8.8h2c.2 0 .2 0 .2.2v7.7zm-.2-9c-.2.2-.6.3-1 .3-.3 0-.6-.1-.8-.3-.2-.3-.4-.6-.4-1 0-.3.2-.6.4-.9.2-.2.6-.3.9-.3.4 0 .7.1 1 .3l.2 1c0 .3 0 .6-.3.9z" />
    </svg>
  );
};
