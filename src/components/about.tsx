"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/theme-provider";
import TypewriterEffect from "./typewrite-effect";
import SocialBar from "./socials";
import { DATA } from "@/lib/data";
import { ScrollAnimation } from "./scroll-animation";
import { LottieAnimation } from "./lottie-animation";

export default function AboutSection() {
  const { theme } = useTheme();
  const [scrollDirection, setScrollDirection] = useState<"up" | "right">(
    typeof window !== "undefined" && window.innerWidth >= 1024 ? "right" : "up"
  );

  useEffect(() => {
    const handleResize = () => {
      const newDirection = window.innerWidth >= 1024 ? "right" : "up";
      if (newDirection !== scrollDirection) {
        setScrollDirection(newDirection);
      }
    };

    // Use matchMedia for better performance
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setScrollDirection(e.matches ? "right" : "up");
    };

    // Initial check
    handleMediaChange(mediaQuery);

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleMediaChange);
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }

    // Fallback for older browsers
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollDirection]);

  return (
    <section className="h-full w-full lg:w-[35%] lg:max-w-xl flex flex-col gap-4 px-6 lg:py-14 pt-14 lg:fixed">
      <ScrollAnimation direction={scrollDirection} delay={0.1}>
        <LottieAnimation />
      </ScrollAnimation>

      <div className="mt-1 flex flex-col gap-1">
        <ScrollAnimation direction={scrollDirection} delay={0.2}>
          <div
            className={`flex flex-col text-4xl md:text-5xl inter-semibold tracking-tight ${
              theme === "dark" ? "text-[#eef0f3]" : ""
            }`}>
            <span className="text-[2.2rem]">Hey, I'm </span>
            <span className="text-[2.2rem]">{DATA.about.name}</span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction={scrollDirection} delay={0.3}>
          <div
            className={`inter-bold bg-linear-to-r bg-clip-text text-transparent ${
              theme === "dark"
                ? "from-[#3be6f6] to-[#093adc]"
                : "from-[#ff7124] to-[#6e26ff]"
            }`}>
            <span className="text-[1.8rem]">
              <TypewriterEffect text={DATA.about.title} speed={50} />
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction={scrollDirection} delay={0.4}>
          <p
            className={`text-sm tracking-tight inter-medium ${
              theme === "dark" ? "text-gray-300/90" : "text-gray-700"
            }`}>
            {DATA.about.description}
          </p>
        </ScrollAnimation>
      </div>

      <ScrollAnimation direction={scrollDirection} delay={0.5}>
        <SocialBar />
      </ScrollAnimation>
    </section>
  );
}
