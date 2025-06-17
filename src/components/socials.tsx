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

export default function SocialBar() {
  const { theme } = useTheme();

  return (
    <TooltipProvider>
      <div className="flex gap-2 w-fit p-0">
        {DATA.socials.map((social: any, index: any) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                to={social.url}
                target="_blank"
                className={`p-2 rounded-md backdrop-blur-lg hover:-translate-y-1 transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-black/30 text-gray-300 hover:text-white"
                    : "bg-slate-400/20 text-gray-600 hover:text-black"
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
  );
}
