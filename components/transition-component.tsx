"use client"

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion-transitions";

export type MotionTransitionProps = {
  children: React.ReactNode;
  className?: string;
  position: 'right' | 'bottom'
};

export function MotionTransition(props: MotionTransitionProps) {
  const { children, className, position } = props

  return (
    <motion.div
      variants={fadeIn(position)}
      initial="initial"
      animate="animate"
      exit="initial"
      className={className}
    >
      {children}
    </motion.div>
  )
}

