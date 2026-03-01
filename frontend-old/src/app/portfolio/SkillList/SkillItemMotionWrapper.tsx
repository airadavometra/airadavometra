"use client";

import { FC, ReactNode } from "react";
import s from "./SkillList.module.css";
import { motion } from "framer-motion";

type SkillItemMotionWrapperProps = {
  children: ReactNode;
};

export const SkillItemMotionWrapper: FC<SkillItemMotionWrapperProps> = ({
  children,
}) => {
  return (
    <motion.div
      className={s.iconWrapper}
      whileHover={{
        rotate: [0, -2, 0, 2, 0],
        transition: {
          repeat: Infinity,
          duration: 0.3,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
