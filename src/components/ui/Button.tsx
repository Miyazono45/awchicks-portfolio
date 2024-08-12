import { motion, MotionProps } from "framer-motion";
import React from "react";

// Create props exacly same with button props
type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & MotionProps;

export default function Button({ ...props }: ButtonProps) {
  return <motion.button {...props} />;
}
