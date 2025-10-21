import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/data";
import { Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "./scroll-animation";
import InitialsAvatar from "./initials-avatar";

export default function Experience() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [visibleLines, setVisibleLines] = useState<{ [key: number]: number }>(
    {}
  );
  const { theme } = useTheme();
  useEffect(() => {
    openIndices.forEach((id) => {
      if (visibleLines[id] === undefined) {
        setVisibleLines((prev) => ({ ...prev, [id]: 0 }));
        const exp = DATA.experiences.find((e: any) => e.id === id);
        if (exp) {
          let current = 0;
          const interval = setInterval(() => {
            current++;
            setVisibleLines((prev) => ({ ...prev, [id]: current }));
            if (current >= exp.description.length) {
              clearInterval(interval);
            }
          }, 120);
        }
      }
    });
    Object.keys(visibleLines).forEach((id) => {
      if (!openIndices.includes(Number(id))) {
        setVisibleLines((prev) => {
          const copy = { ...prev };
          delete copy[Number(id)];
          return copy;
        });
      }
    });
  }, [openIndices]);

  return (
    <div className="max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className={`text-2xl inter-semibold mb-4`}>Experience</h2>
      </ScrollAnimation>
      <Accordion
        type="multiple"
        className="space-y-2"
        onValueChange={(values: string[]) => {
          const indices = values
            .map((value) => {
              const parts = value.split("-");
              const index = parseInt(parts[1], 10);
              return isNaN(index) ? null : index;
            })
            .filter((v): v is number => v !== null);

          setOpenIndices(indices);
        }}>
        {DATA.experiences.map((exp: any) => (
          <ScrollAnimation key={exp.id}>
            <AccordionItem value={`item-${exp.id}`} className="border-none">
              <div className="flex items-start gap-4 relative">
                <Link to={exp.url} target="_blank">
                  {exp.image !== "" ? (
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-11 h-11 rounded-full object-cover hover:scale-105 transition-all duration-200 shadow-md shadow-black/10"
                    />
                  ) : (
                    <InitialsAvatar
                      name={exp.company}
                      style="w-11 h-11 transition-transform duration-200 ease-in-out hover:scale-105 shadow-md shadow-black/10"
                    />
                  )}
                </Link>
                <div className="flex-1 pb-4">
                  <div className="flex flex-row justify-between items-center gap-1">
                    <span
                      className={`text-sm inter-medium ${
                        theme === "dark" ? "text-[#e4e8ec]" : "text-black"
                      }`}>
                      {exp.company}
                    </span>
                    <span
                      className={`min-w-fit text-xs uppercase inter-medium tracking-tight ${
                        theme === "dark" ? "text-gray-300/80" : "text-dark-500"
                      } uppercase`}>
                      {exp.period}
                    </span>
                  </div>
                  <AccordionTrigger
                    className={`flex flex-row items-start p-0 hover:no-underline cursor-pointer ${
                      theme === "dark"
                        ? "[&>svg]:text-white"
                        : "[&>svg]:text-black"
                    }`}>
                    <div className="inter-regular text-[0.8rem] flex items-center justify-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-1 dark:text-[#e4e8ec]">
                      <Minus /> {exp.role}
                      <FaCheckCircle className="ml-1 w-3 h-3 text-green-500" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent
                    className={`mt-1 text-[0.8rem] ${
                      theme === "dark" ? "text-[#d8dee6]" : "text-dark-500"
                    }`}>
                    <ul className="list-disc pl-5 space-y-1">
                      {openIndices.includes(exp.id) &&
                        exp.description.map((item: any, i: any) => (
                          <li
                            key={i}
                            className={`transition-all duration-400 ease-in-out ${
                              visibleLines[exp.id] > i
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-4"
                            }`}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </AccordionContent>
                </div>
              </div>
            </AccordionItem>
          </ScrollAnimation>
        ))}
      </Accordion>
    </div>
  );
}
