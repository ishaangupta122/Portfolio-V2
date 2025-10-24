"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useMemo } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
}

const DIRECTION_OFFSET = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
} as const;

export const ScrollAnimation = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -50px 0px", // Start animation slightly before element is visible
  });

  const variants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        filter: "blur(6px)",
        ...DIRECTION_OFFSET[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration,
          delay,
          ease: [0.25, 0.4, 0.25, 1], // Optimized easing curve
        },
      },
    }),
    [direction, delay, duration]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      style={{ willChange: isInView ? "auto" : "transform, opacity" }}>
      {children}
    </motion.div>
  );
};
