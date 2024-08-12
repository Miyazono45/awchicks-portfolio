"use client";
import { motion } from "framer-motion";

type H1MType = {
  text: string;
  initialParam: object;
  animateParam: object;
  transitionParam: object;
  className?: string;
};

export const H1Motion = ({
  text,
  initialParam,
  animateParam,
  transitionParam,
  className,
}: H1MType) => {
  return (
    <motion.h1
      className={className}
      initial={initialParam}
      animate={animateParam}
      transition={transitionParam}
    >
      {text}
    </motion.h1>
  );
};
