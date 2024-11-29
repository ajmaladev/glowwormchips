"use client";
import { motion, Transition } from "framer-motion";
import { ReactNode } from "react";

interface BouncyMotionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  initialY?: number;
  transition?: Transition;
}

export const BouncyMotion = ({ 
  children, 
  className, 
  style,
  initialY = -50,
  transition
}: BouncyMotionProps) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ y: initialY, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={transition || {
        type: "spring",
        duration: 0.8,
        bounce: 0.5,
        times: [0, 0.4, 0.7, 1],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 200,
          restDelta: 0.001
        }
      }}
    >
      {children}
    </motion.div>
  );
};