"use client";

import { useTheme } from "@/context/theme-provider";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const InteractionGradient = () => {
  const { theme } = useTheme();

  // State: is it a pointer (non-touch) device?
  const [isPointerDevice, setIsPointerDevice] = useState(true);

  // motion values avoid re-renders
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

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

  // map motion values to gradient string (no spring, instant tracking)
  const background = useTransform([x, y], ([x, y]: number[]) => {
    if (theme === "light") {
      return `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(255, 210, 180, 0.4) -80%,
          #FFFFFF 70%
        )
      `;
    } else {
      return `
        radial-gradient(
          circle at ${x * 100}% ${y * 100}%,
          rgba(0, 128, 255, 0.3) -80%,
          rgba(0, 128, 255, 0) 70%
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
