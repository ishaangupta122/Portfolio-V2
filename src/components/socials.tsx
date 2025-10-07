import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { ModeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/data";

function MobileBar({ theme }: { theme: string }) {
  return (
    <TooltipProvider>
      <div className="md:hidden fixed inset-x-4 bottom-5 z-50 pointer-events-auto">
        <div
          className="mx-auto w-fit flex gap-3 items-center bg-white/30 dark:bg-black/30
                        border border-black/10 dark:border-white/5 backdrop-blur-lg backdrop-saturate-200
                        rounded-xl px-3 py-2 shadow-lg
                        max-w-[calc(100%-1rem)]">
          {DATA.socials.map((social: any, index: number) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  to={social.url}
                  target="_blank"
                  className={`p-2 rounded-md hover:-translate-y-1 transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-black/5 text-gray-200 hover:text-white"
                      : "bg-white/10 text-gray-800 hover:text-gray-800"
                  }`}>
                  {social.icon && <social.icon className="h-5 w-5" />}
                </Link>
              </TooltipTrigger>
              <TooltipContent className="inter-bold text-sm">
                {social.label}
              </TooltipContent>
            </Tooltip>
          ))}

          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ModeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent className="inter-bold text-sm">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default function SocialBar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ensure we only createPortal on client
  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* Desktop / Tablet (unchanged) */}
      <TooltipProvider>
        <div className="hidden md:flex gap-2 w-fit p-0">
          {DATA.socials.map((social: any, index: any) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  to={social.url}
                  target="_blank"
                  className={`p-2 rounded-md backdrop-blur-lg hover:-translate-y-1 transition-all duration-200 border ${
                    theme === "dark"
                      ? "bg-slate-900/50 border-gray-300/10 text-gray-200 hover:text-white"
                      : "bg-slate-400/5 border-gray-600/10 text-gray-700 hover:text-gray-800"
                  }`}>
                  {social.icon && <social.icon className="h-5 w-5" />}
                </Link>
              </TooltipTrigger>
              <TooltipContent className="inter-bold text-sm">
                {social.label}
              </TooltipContent>
            </Tooltip>
          ))}
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <ModeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent className="inter-bold text-sm">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      {/* Mobile (render via portal so it's positioned relative to viewport) */}
      {mounted && createPortal(<MobileBar theme={theme} />, document.body)}
    </>
  );
}
