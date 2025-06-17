import { useTheme } from "@/context/theme-provider";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const InteractionGradient = () => {
  const { theme } = useTheme();

  // State: is it a pointer (non-touch) device?
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  // motion values avoid re-renders
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Add spring animation for smooth movement
  const springConfig = { damping: 20, stiffness: 100 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    // Check if the device has a fine pointer (like mouse)
    const mq = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mq.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsPointerDevice(event.matches);
    };

    mq.addEventListener("change", handleChange);

    return () => {
      mq.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isPointerDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth);
      y.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, isPointerDevice]);

  // map motion values to gradient string
  const background = useTransform([springX, springY], ([x, y]: number[]) => {
    if (theme === "light") {
      return `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(255, 200, 180, 0.5) 0%,
          #F4F0F0 40%
        )
      `;
    } else {
      return `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(0, 128, 255, 0.3) 0%,
          rgba(0, 128, 255, 0) 50%
        )
      `;
    }
  });

  // Don't render the effect at all if not pointer device
  if (!isPointerDevice) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
        background,
      }}
    />
  );
};

export default InteractionGradient;
