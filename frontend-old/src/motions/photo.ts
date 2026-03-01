export const closeButtonVariants = {
  rotate: {
    rotate: 180,
    transition: { type: "spring" },
  },
};
export const nextButtonVariants = {
  rotate: {
    rotate: 360,
    transition: { type: "spring" },
  },
};

export const photoContainerVariants = {
  hover: {
    scale: 0.95,
    transition: { type: "spring", stiffness: 120, duration: 1.5 },
  },
};
export const photoVariants = {
  hover: {
    scale: 1.15,
    transition: { type: "spring", stiffness: 120, duration: 1.5 },
  },
};
export const fullScreenPhoto = {
  hidden: { scale: 0 },
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
