import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTheme } from "@/context/theme-provider";
import { experiences } from "@/data";
import { Minus } from "lucide-react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Experience() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const { theme } = useTheme();
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-5">Experience</h2>
      <Accordion
        type="multiple"
        className="space-y-4"
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
        {experiences.map((exp) => (
          <AccordionItem
            key={exp.id}
            value={`item-${exp.id}`}
            className="border-none">
            <div className="flex items-start gap-4 relative">
              <Link to={exp.url} target="_blank">
                <img
                  src={exp.image || "/experience_img.jpg"}
                  alt={exp.company}
                  className="w-13 h-13 rounded-full object-cover hover:scale-105 transition-all duration-200"
                />
              </Link>
              <div className="flex-1 pb-4">
                <div className="flex flex-wrap items-center gap-2 justify-between font-mono">
                  <span className="text-lg font-semibold">{exp.company}</span>
                  <span
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-dark-500"
                    } uppercase tracking-wider`}>
                    {exp.period}
                  </span>
                </div>
                <AccordionTrigger
                  className={`flex flex-row items-start p-0 hover:no-underline cursor-pointer ${
                    theme === "dark"
                      ? "[&>svg]:text-white"
                      : "[&>svg]:text-black"
                  }`}>
                  <div className="text-base font-mono tracking-tighter font-medium flex items-center justify-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-1 italic">
                    <Minus /> {exp.role}
                    <FaCheckCircle className="ml-1 w-4 h-4 text-green-500" />
                  </div>
                </AccordionTrigger>
                <AccordionContent
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-dark-500"
                  }`}>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className={`transform transition duration-500 ease-out ${
                          openIndices.includes(exp.id)
                            ? "opacity-100 translate-x-1"
                            : "opacity-0 -translate-x-3"
                        }`}
                        style={{
                          transitionDelay: `${
                            openIndices.includes(exp.id) ? i * 100 : 0
                          }ms`,
                        }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
