"use client";

import s from "./ContactLink.module.css";
import { FC, ReactNode } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { tooltipVariants } from "@/motions/contactPage";

type EmailButtonProps = {
  email: string;
  children: ReactNode;
};

export const EmailButton: FC<EmailButtonProps> = ({ email, children }) => {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <PopoverButton
            className={s.link}
            onClick={() => {
              navigator.clipboard.writeText(email);
              setTimeout(() => close(), 3000);
            }}
          >
            {children}
          </PopoverButton>
          <AnimatePresence>
            {open && (
              <PopoverPanel
                static
                as={motion.div}
                className={s.tooltip}
                anchor="bottom start"
                variants={tooltipVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                E-mail is copied to clipboard!
              </PopoverPanel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
};
