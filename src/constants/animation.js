export const hamburgerMotion = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: "-100%",
  },
};

export const HeaderLeftMotion = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const HeaderRightMotion = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const SpecialMenuMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export const MenuMotion = {
  hidden: {
    y: "-50%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
