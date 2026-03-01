"use client";

import { Fragment } from "react";
import s from "./CareerTimeline.module.css";
import { CAREER_TIMELINE } from "@/constants/careerTimeline";
import { Expand } from "@/icons/Expand";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  expandExperienceItem,
  experienceButtonVariants,
} from "@/motions/portfolio";
import classNames from "classnames";

export const CareerTimeline = () => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>Career Path</h2>
      <div className={s.experienceList}>
        {CAREER_TIMELINE.map((item, index) => (
          <Disclosure as="div" key={item.title} defaultOpen={index === 0}>
            {({ open }) => (
              <>
                <DisclosureButton
                  className={s.experienceItemTrigger}
                  as={motion.button}
                  whileHover="hover"
                  variants={experienceButtonVariants}
                >
                  <span className={s.year}>{item.year}</span>
                  <span>{item.title}</span>
                  <div className={s.expandBtnWrapper}>
                    <Expand
                      className={classNames(s.expandBtn, {
                        [s.rotate]: open,
                      })}
                      aria-hidden
                    />
                  </div>
                </DisclosureButton>
                <AnimatePresence>
                  {open && (
                    <DisclosurePanel static as={Fragment}>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={expandExperienceItem}
                      >
                        <p className={s.experienceItemText}>{item.text}</p>
                      </motion.div>
                    </DisclosurePanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};
