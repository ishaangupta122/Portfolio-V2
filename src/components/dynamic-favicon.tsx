"use client";

import { useTheme } from "@/context/theme-provider";
import { useEffect } from "react";

export function DynamicFavicon() {
  const { theme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;
    const iconPath = theme === "dark" ? "/user_dark.png" : "/user_light.png";

    if (favicon) {
      favicon.href = iconPath;
    } else {
      const link = document.createElement("link");
      link.id = "favicon";
      link.rel = "icon";
      link.href = iconPath;
      document.head.appendChild(link);
    }
  }, [theme]);

  return null;
}
