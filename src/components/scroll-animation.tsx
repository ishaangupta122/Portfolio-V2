import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

export const ScrollAnimation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}>
      {children}
    </motion.div>
  );
};
