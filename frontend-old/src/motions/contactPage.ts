export const contactLinkVariants = {
  hover: {
    originX: 0,
    scale: 1.3,
    transition: { type: "spring", stiffness: 300 },
  },
};
export const tooltipVariants = {
  hidden: { scale: 0, originX: 0, originY: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    scale: 0,
    transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
  },
};
