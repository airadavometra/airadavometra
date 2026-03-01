"use client";

import { motion } from "framer-motion";
import s from "./DownloadCvButton.module.css";
import Link from "next/link";
import { downloadLinkVariants } from "@/motions/portfolio";

export const DownloadCvButton = () => {
  return (
    <motion.div variants={downloadLinkVariants} animate="animate">
      <Link
        className={s.download}
        href="/Daria Artemova CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </Link>
    </motion.div>
  );
};
