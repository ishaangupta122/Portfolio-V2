"use client";

import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/lib/data";
import { Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimation } from "./scroll-animation";
import InitialsAvatar from "./initials-avatar";

export default function Education() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <ScrollAnimation direction="up">
        <h2 className={`text-2xl inter-semibold mb-2`}>Education</h2>
      </ScrollAnimation>
      <div className="space-y-2">
        {DATA.educations.map((edu: any) => (
          <ScrollAnimation key={edu.id} direction="up" delay={edu.id * 0.05}>
            <Link
              href={edu.url}
              target="_blank"
              className="group bg-transparent border-none shadow-none flex flex-row justify-center items-start md:items-center gap-4 py-2">
              <div className="relative w-11 h-11">
                {edu.logo !== "" ? (
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} Logo`}
                    width={44}
                    height={44}
                    loading="lazy"
                    quality={75}
                    className="min-w-11 min-h-11 object-cover rounded-full transition-transform duration-200 ease-in-out group-hover:scale-105 shadow-md shadow-black/10"
                  />
                ) : (
                  <InitialsAvatar
                    name={edu.institution}
                    style="text-sm w-11 h-11 transition-transform duration-200 ease-in-out group-hover:scale-105 shadow-md shadow-black/10"
                  />
                )}
              </div>
              <div className="flex flex-col w-full p-0">
                <div className="flex flex-row justify-between items-start md:items-center gap-1">
                  <h3
                    className={`inter-medium text-sm transition-transform duration-300 ease-in-out group-hover:translate-x-1 ${
                      theme === "dark" ? "text-[#e4e8ec]" : "text-dark-500"
                    }`}>
                    {edu.institution}
                  </h3>
                  <span
                    className={`min-w-fit text-xs uppercase inter-medium tracking-tight ${
                      theme === "dark" ? "text-gray-300/80" : "text-gray-700"
                    } `}>
                    {edu.period}
                  </span>
                </div>
                <p
                  className={`inter-regular text-[0.8rem] flex items-center justify-start gap-1 md:mt-0 mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1 ${
                    theme === "dark" ? "text-[#e4e8ec]" : "text-black"
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
