"use client";

import { useTheme } from "@/context/theme-provider";
import { useEffect, useState } from "react";

export const FixedGradient = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial value on mount
    setIsMobile(window.innerWidth <= 600);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) return null;

  return (
    <div>
      <div
        className={`
          fixed -top-25 -right-5
          w-90 h-80
          blur-2xl
          pointer-events-none
          z-[-1]
        `}
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle at top right, rgba(255, 200, 180, 1) -60%, #F4F0F0 80%)"
              : "radial-gradient(circle at top right, rgba(0, 128, 255, 0.5) -60%, rgba(0, 128, 255, 0) 80%)",
        }}
      />
    </div>
  );
};
