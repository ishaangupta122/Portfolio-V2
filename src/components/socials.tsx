import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { ModeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";
import { FaGithub, FaLinkedin, FaRegFileAlt, FaTwitter } from "react-icons/fa";

export default function SocialBar() {
  const { theme } = useTheme();
  const links = [
    {
      icon: <FaRegFileAlt />,
      label: "Resume",
      url: "/ishaan-gupta-resume.pdf",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      url: "https://twitter.com/yourusername",
    },
    {
      icon: <FaLinkedin />,
      label: "Source",
      url: "https://github.com/yourusername/yourproject",
    },
  ];

  return (
    <TooltipProvider>
      <div className="flex gap-2 w-fit p-0">
        {links.map((link, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                to={link.url}
                target="_blank"
                className={`p-2 rounded-md backdrop-blur-lg  ${
                  theme === "dark"
                    ? "bg-black/30 text-gray-400 hover:text-white"
                    : "bg-slate-300/30 text-gray-600 hover:text-black"
                }`}>
                <link.icon.type className=" h-5 w-5 " />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="font-medium text-sm">
              {link.label}
            </TooltipContent>
          </Tooltip>
        ))}

        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <ModeToggle />
            </div>
          </TooltipTrigger>
          <TooltipContent className="font-medium text-sm">
            Toggle Theme
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
