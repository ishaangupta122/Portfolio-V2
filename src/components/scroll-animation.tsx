"use client";

import { ScrollAnimationProps } from "@/lib/types";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useMemo } from "react";

const DIRECTION_OFFSET = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
} as const;

export const ScrollAnimation = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  stagger = false,
  staggerDelay = 0.1,
  viewport,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: viewport?.once ?? true,
    amount: viewport?.amount ?? 0.2,
  });

  const variants: Variants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        filter: "blur(4px)",
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
          ease: [0.22, 0.61, 0.36, 1], // Modern easeOutCubic
          ...(stagger && {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          }),
        },
      },
    }),
    [direction, delay, duration, stagger, staggerDelay]
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      style={{
        willChange: isInView ? "auto" : "transform, opacity, filter",
      }}>
      {children}
    </motion.div>
  );
};

export const HoverAnimation = ({
  children,
  scale = 1.05,
  lift = false,
  liftAmount = -8,
  duration = 0.2,
  className = "",
}: {
  children: React.ReactNode;
  scale?: number;
  lift?: boolean;
  liftAmount?: number;
  duration?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        ...(lift && { y: liftAmount }),
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
          mass: 0.5,
        },
      }}
      whileTap={{ scale: scale * 0.98 }}
      style={{ willChange: "transform" }}>
      {children}
    </motion.div>
  );
};
