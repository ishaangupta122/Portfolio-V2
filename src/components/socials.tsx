import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { ModeToggle } from "./theme-toggle";
import { useTheme } from "@/context/theme-provider";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRegFileAlt,
  FaTwitter,
} from "react-icons/fa";

export default function SocialBar() {
  const { theme } = useTheme();
  const links = [
    {
      icon: <FaRegFileAlt />,
      label: "Resume",
      url: "https://drive.google.com/file/d/1JGCOPowZn3_dLo0WQAPzxGWtZdAV0TYd/view?usp=drive_link",
    },
    {
      icon: <FaEnvelope />,
      label: "Mail",
      url: "mailto:ishaang2209@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/ishaangupta122",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      url: "https://twitter.com/ishaangupta05",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ishaangupta05/",
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
                className={`p-2 rounded-md backdrop-blur-lg hover:-translate-y-1 transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-black/30 text-gray-400 hover:text-white"
                    : "bg-slate-300/30 text-gray-600 hover:text-black"
                }`}>
                <link.icon.type className=" h-5 w-5 " />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="inter-bold text-sm">
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
          <TooltipContent className="inter-bold text-sm">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
