"use client";

import { FC } from "react";
import s from "./Project.module.css";
import { ProjectInfo } from "@/types/projectInfo";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  projectLinkVariants,
  projectPhotoLinkVariants,
  projectTagsVariants,
} from "@/motions/portfolio";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import classNames from "classnames";

type ProjectProps = {
  project: ProjectInfo;
};

export const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <div className={s.projectContainer}>
      <motion.h3
        className={classNames(s.title, s.titleMobile)}
        variants={projectLinkVariants}
        whileHover="hover"
      >
        <Link href={project.link}>{project.name}</Link>
      </motion.h3>
      <motion.div
        className={s.imageWrapper}
        variants={projectPhotoLinkVariants}
        whileHover="hover"
        aria-hidden
      >
        <Link className={s.imageLinkWrapper} href={project.link} aria-hidden>
          <Image
            className={s.image}
            src={project.imgPath}
            alt={`${project.name} screenshot`}
            loading="lazy"
            width={0}
            height={0}
            sizes="100vw"
            aria-hidden
          />
        </Link>
      </motion.div>
      <div className={s.descriptionContainer}>
        <motion.h3
          className={classNames(s.title, s.titleDesktop)}
          variants={projectLinkVariants}
          whileHover="hover"
        >
          <Link href={project.link}>{project.name}</Link>
        </motion.h3>
        <div className={s.description}>
          {project.description.map((item, index) => (
            <ReactMarkdown key={index}>{item}</ReactMarkdown>
          ))}
        </div>
        <ul className={s.tagsContainer}>
          {project.techStack.map((item, index) => (
            <motion.li
              className={s.tag}
              key={item}
              variants={projectTagsVariants}
              initial="offscreen"
              viewport={{ once: true }}
              whileHover="hover"
              whileInView={{
                ...projectTagsVariants.onscreen,
                transition: {
                  delay: index * 0.6,
                  type: "spring",
                  stiffness: 120,
                },
              }}
            >
              {`${item}`}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
