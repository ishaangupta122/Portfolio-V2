"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-provider";
import { useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);

  const toggleTheme = () => {
    setIsRotating(true);
    setTheme(theme === "dark" ? "light" : "dark");

    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full md:rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-200 md:border ${
        theme === "dark"
          ? "md:bg-slate-900/50 md:border-gray-300/10 bg-black/5 text-gray-200 hover:text-white"
          : "md:bg-slate-400/5 md:border-gray-600/10 bg-white/10 text-gray-700 hover:text-gray-800"
      }`}
      disabled={isRotating}>
      {theme === "dark" ? (
        <Sun
          className={`w-5 h-5 transition-transform duration-200 ${
            isRotating ? "rotate-360" : ""
          }`}
        />
      ) : (
        <Moon
          className={`w-5 h-5 transition-transform duration-200 ${
            isRotating ? "-rotate-360" : "rotate-0"
          }`}
        />
      )}
    </button>
  );
}
