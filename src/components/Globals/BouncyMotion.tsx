"use client";
import { motion, Transition, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface BouncyMotionProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileHover"> {
  children: ReactNode;
  initialY?: number;
  transition?: Transition;
  disableHoverAnimation?: boolean;
  /** Additional HTML attributes for accessibility */
  itemScope?: boolean;
  itemType?: string;
  itemProp?: string;
}

interface AnimationProps {
  initial: { y: number; opacity: number };
  animate: { y: number; opacity: number };
  transition: Transition;
  whileHover?: { scale: number };
}

export const BouncyMotion = ({ 
  children, 
  className, 
  style,
  initialY = -50,
  transition,
  disableHoverAnimation = false,
  itemScope,
  itemType,
  itemProp,
  ...props
}: BouncyMotionProps) => {
  // Default animation settings
  const defaultTransition: Transition = {
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
  };

  // Base animation properties
  const animationProps: AnimationProps = {
    initial: { y: initialY, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: transition || defaultTransition,
  };

  // Add hover animation if not disabled
  if (!disableHoverAnimation) {
    animationProps.whileHover = { scale: 1.05 };
  }

  return (
    <motion.div
      className={className}
      style={style}
      {...animationProps}
      itemScope={itemScope}
      itemType={itemType}
      itemProp={itemProp}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Add display name for better debugging
BouncyMotion.displayName = "BouncyMotion";