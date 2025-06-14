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
      className={`p-2 rounded-md backdrop-blur-lg cursor-pointer  ${
        theme === "dark"
          ? "bg-black/30 text-gray-400 hover:text-white"
          : "bg-slate-300/30 text-gray-600 hover:text-black"
      }`}
      disabled={isRotating}>
      {theme === "dark" ? (
        <Sun
          className={`w-5 h-5 transition-transform duration-200 ${
            isRotating ? "rotate-180" : ""
          }`}
        />
      ) : (
        <Moon
          className={`w-5 h-5 transition-transform duration-200 ${
            isRotating ? "rotate-180" : ""
          }`}
        />
      )}
    </button>
  );
}
