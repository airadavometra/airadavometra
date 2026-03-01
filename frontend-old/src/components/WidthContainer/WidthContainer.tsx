import { ReactNode } from "react";
import s from "./WidthContainer.module.css";
import classnames from "classnames";

type WidthContainerProps = {
  children: ReactNode;
  className?: string;
};

export const WidthContainer = ({
  children,
  className,
}: WidthContainerProps) => {
  return (
    <div className={classnames(s.widthContainer, className)}>{children}</div>
  );
};
