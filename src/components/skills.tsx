import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/data";
import { ScrollAnimation } from "./scroll-animation";
import { FadeBlurStaggerItem } from "./stagger-effect";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section className="max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className={`text-2xl inter-bold mb-2`}>Skills</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill: any, i: any) => (
            <FadeBlurStaggerItem key={skill.id} index={i}>
              <div
                className={`${
                  theme === "dark"
                    ? "bg-slate-800/50 border-gray-300/10 text-[#d8dee6] shadow-none"
                    : "bg-slate-400/5 border-gray-600/20 text-gray-900"
                } px-2.5 py-0.5 rounded-sm text-[.8rem] border bg-gradient-to-br cursor-pointer hover:scale-105 transition-all duration-200 inter-medium`}>
                <span>{skill.name}</span>
              </div>
            </FadeBlurStaggerItem>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
