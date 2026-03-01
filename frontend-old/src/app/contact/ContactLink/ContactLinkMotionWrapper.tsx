"use client";

import { FC, ReactNode } from "react";
import s from "./ContactLink.module.css";
import { contactLinkVariants } from "@/motions/contactPage";
import { motion } from "framer-motion";

type ContactLinkMotionWrapperProps = {
  children: ReactNode;
};

export const ContactLinkMotionWrapper: FC<ContactLinkMotionWrapperProps> = ({
  children,
}) => {
  return (
    <motion.div
      className={s.linksContainer}
      variants={contactLinkVariants}
      whileHover={contactLinkVariants.hover}
    >
      {children}
    </motion.div>
  );
};
