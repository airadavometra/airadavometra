"use client";

import { motion } from "framer-motion";
import s from "./GithubLink.module.css";
import { Github } from "@/icons/contacts/Github";
import { githubLinkVariants } from "@/motions/portfolio";
import Link from "next/link";

export const GithubLink = () => {
  return (
    <section className={s.section}>
      <motion.div variants={githubLinkVariants} whileHover="hover">
        <Link href="https://github.com/airadavometra" className={s.link}>
          Feel free to check out my github
          <Github className={s.logo} aria-hidden />
        </Link>
      </motion.div>
    </section>
  );
};
