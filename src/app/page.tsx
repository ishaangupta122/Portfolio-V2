"use client";

import Profile from "@/components/profile";
import InteractionGradient from "@/components/interaction-gradient";
import { FixedGradient } from "@/components/fixed-gradient";
import { PageLoader } from "@/components/page-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/theme-provider";

export default function Home() {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

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
      {!isLoaded ? (
        <PageLoader onLoadingComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <ScrollProgress />
          <FixedGradient />
          <InteractionGradient />
          <Profile />
        </>
      )}
    </>
  );
}
