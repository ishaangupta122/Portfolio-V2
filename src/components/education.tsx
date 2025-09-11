import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/data";
import { Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "./scroll-animation";
import InitialsAvatar from "./initials-avatar";

export default function Education() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className={`text-2xl inter-bold mb-2`}>Education</h2>
      </ScrollAnimation>
      <div className="space-y-2">
        {DATA.educations.map((edu: any) => (
          <ScrollAnimation key={edu.id}>
            <Link
              to={edu.url}
              target="_blank"
              className="group bg-transparent border-none shadow-none flex flex-row justify-center items-start md:items-center gap-4 py-2">
              <div className="relative w-11 h-11">
                {edu.logo !== "" ? (
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} Logo`}
                    className="min-w-11 min-h-11 object-cover rounded-full transition-transform duration-200 ease-in-out group-hover:scale-105 shadow-md shadow-black/10"
                  />
                ) : (
                  <InitialsAvatar
                    name={edu.institution}
                    style="w-11 h-11 transition-transform duration-200 ease-in-out group-hover:scale-105 shadow-md shadow-black/10"
                  />
                )}
              </div>
              <div className="flex flex-col w-full p-0">
                <div className="flex flex-col md:flex-row md:justify-between justify-start md:items-center gap-1">
                  <h3
                    className={`inter-semibold text-base transition-transform duration-300 ease-in-out group-hover:translate-x-1 ${
                      theme === "dark" ? "text-[#d8dee6]" : "text-dark-500"
                    }`}>
                    {edu.institution}
                  </h3>
                  <span
                    className={`text-xs  ${
                      theme === "dark" ? "text-gray-300/80" : "text-gray-700"
                    } uppercase inter-semibold`}>
                    {edu.period}
                  </span>
                </div>
                <p
                  className={`text-sm inter-medium flex items-center justify-start gap-1 md:mt-0 mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1 ${
                    theme === "dark" ? "text-[#d8dee6]" : "text-black"
                  }`}>
                  <Minus /> {edu.degree}
                </p>
              </div>
            </Link>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
