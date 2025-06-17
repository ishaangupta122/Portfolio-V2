import { motion, easeOut, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeBlurStaggerItemProps {
  children: ReactNode;
  index: number;
  delayPerItem?: number;
  duration?: number;
}

interface StaggerProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const FadeBlurStaggerItem = ({
  children,
  index,
  delayPerItem = 0.1,
  duration = 0.4,
}: FadeBlurStaggerItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{
        delay: index * delayPerItem,
        duration: duration,
        ease: "easeOut",
      }}>
      {children}
    </motion.div>
  );
};

export const Stagger = Object.assign(
  ({ children, stagger = 0.3, className }: StaggerProps) => {
    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: stagger,
        },
      },
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}>
        {children}
      </motion.div>
    );
  },
  {
    Item: ({ children, className }: StaggerItemProps) => {
      const itemVariants: Variants = {
        hidden: { opacity: 0, x: -50, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.4,
            ease: easeOut,
          },
        },
      };

      return (
        <motion.div variants={itemVariants} className={className}>
          {children}
        </motion.div>
      );
    },
  }
);
