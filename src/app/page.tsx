"use client";

import Profile from "@/components/profile";
import InteractionGradient from "@/components/interaction-gradient";
import { FixedGradient } from "@/components/fixed-gradient";
import { useEffect } from "react";
import { useTheme } from "@/context/theme-provider";

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = theme === "dark" ? "/user_dark.png" : "/user_light.png";
    }
  }, [theme]);

  return (
    <>
      <FixedGradient />
      <InteractionGradient />
      <Profile />
    </>
  );
}
