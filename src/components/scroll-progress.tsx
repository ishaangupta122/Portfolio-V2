"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/context/theme-provider";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.0001,
  });

  const { theme } = useTheme();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        scaleX,
        background:
          theme === "dark"
            ? "linear-gradient(90deg, #3be6f6 0%, #093adc 100%)"
            : "linear-gradient(90deg, #ff7124 0%, #6e26ff 100%)",
        willChange: "transform",
      }}
    />
  );
};
