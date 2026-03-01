"use client";

import { useState } from "react";
import s from "./MobileMenu.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { CloseButton, Dialog, DialogPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";
import { Burger } from "@/icons/Burger";
import { Close } from "@/icons/Close";
import { NAVIGATION } from "@/constants/navigation";
import { menuVariants } from "@/motions/mobileMenu";

export const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={s.menuButton} onClick={() => setIsOpen(true)}>
        <Burger className={s.menuIcon} aria-hidden />
        <VisuallyHidden>Open menu</VisuallyHidden>
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className={s.dialog}
            as={motion.div}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <DialogPanel className={s.panel}>
              <CloseButton className={s.closeButton}>
                <Close className={s.closeIcon} aria-hidden />
                <VisuallyHidden>Close menu</VisuallyHidden>
              </CloseButton>
              <nav className={s.navigation}>
                <ul className={s.linkList}>
                  {NAVIGATION.map(({ title, path }) => (
                    <li key={path} className={s.linkWrapper}>
                      <Link
                        href={path}
                        className={classNames(s.link, {
                          [s.selected]: path === pathname,
                        })}
                        onClick={() => setIsOpen(false)}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </DialogPanel>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};
