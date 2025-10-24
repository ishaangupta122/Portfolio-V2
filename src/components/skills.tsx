"use client";

import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/lib/data";
import Image from "next/image";
import { ScrollAnimation } from "./scroll-animation";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section className="max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className={`text-2xl inter-semibold mb-2`}>Skills</h2>
      </ScrollAnimation>

      <div className="flex items-start justify-start flex-wrap gap-1.5">
        {DATA.skills.map((skill: any) => (
          <ScrollAnimation
            key={skill.id}
            direction="up"
            delay={skill.id * 0.03}>
            <div
              className={`${
                theme === "dark"
                  ? "bg-slate-800/70 border-gray-300/10 text-gray-200"
                  : "bg-slate-400/10 border-gray-600/20 text-gray-800"
              } flex items-center justify-center gap-[0.3rem] flex-row px-2 py-0.5 rounded-sm text-[0.8rem] border bg-linear-to-br cursor-pointer hover:scale-105 transition-all duration-200 inter-medium`}>
              <Image
                src={skill.image}
                alt={skill.name}
                width={14}
                height={14}
                loading="lazy"
                quality={75}
                className="w-3.5 h-3.5 object-contain"
              />
              <span>{skill.name}</span>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
