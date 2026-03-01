export const expandExperienceItem = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: [0, 0, 1],
    height: "auto",
    transition: { duration: 0.7, ease: "easeInOut" },
  },
  exit: {
    opacity: [1, 0, 0],
    height: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
  },
};

export const experienceButtonVariants = {
  hover: {
    originX: 0,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};
export const experienceButtonIconVariants = {
  rotate: {
    rotate: 180,
    transition: { type: "spring" },
  },
};

export const tooltipVariants = {
  hidden: { scale: 0, originX: 1, originY: 0 },
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

export const projectTagsVariants = {
  offscreen: { scale: 0 },
  onscreen: {
    scale: 1,
  },
  hover: {
    rotate: [0, -2, 0, 2, 0],
    transition: {
      repeat: Infinity,
      duration: 0.3,
    },
  },
};

export const projectLinkVariants = {
  hover: {
    originX: 0,
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const projectPhotoLinkVariants = {
  hover: {
    scale: 0.98,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const githubLinkVariants = {
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
};

export const downloadLinkVariants = {
  animate: {
    scale: [1, 1.01, 1, 0.99, 1],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};
