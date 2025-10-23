import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/data";
import { ScrollAnimation } from "./scroll-animation";
import { FadeBlurStaggerItem } from "./stagger-effect";

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section className="max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className={`text-2xl inter-semibold mb-2`}>Skills</h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="flex items-start justify-start flex-wrap gap-1.5">
          {DATA.skills.map((skill: any, i: any) => (
            <FadeBlurStaggerItem key={skill.id} index={i}>
              <div
                className={`${
                  theme === "dark"
                    ? "bg-slate-800/70 border-gray-300/10 text-gray-200"
                    : "bg-slate-400/10 border-gray-600/20 text-gray-800"
                } flex items-center justify-center gap-[0.3rem] flex-row px-2 py-0.5 rounded-sm text-[0.8rem] border bg-gradient-to-br cursor-pointer hover:scale-105 transition-all duration-200 inter-medium`}>
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-3.5 h-3.5 object-contain"
                />
                <span>{skill.name}</span>
              </div>
            </FadeBlurStaggerItem>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
