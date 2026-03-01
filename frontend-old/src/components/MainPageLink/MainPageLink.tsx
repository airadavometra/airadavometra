"use client";

import { FC, ReactNode } from "react";
import s from "./MainPageLink.module.css";
import { motion } from "framer-motion";
import { menuItemVariants } from "@/motions/header";
import Link, { LinkProps } from "next/link";

type MainPageLinkProps = {
  type: "primary" | "secondary";
  children: ReactNode;
} & LinkProps;

export const MainPageLink: FC<MainPageLinkProps> = ({
  type,
  children,
  ...rest
}) => {
  return (
    <motion.div
      className={s[type]}
      variants={menuItemVariants}
      whileHover={menuItemVariants.hover}
    >
      <Link {...rest}>{children}</Link>
    </motion.div>
  );
};
