import { useTheme } from "@/context/theme-provider";
import { skills } from "@/data";

export default function Skills() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-2xl inter-bold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className={` ${
              theme === "dark"
                ? "bg-slate-900 border-slate-800 text-white shadow-none"
                : "bg-gray-50 border-gray-300 text-black"
            } px-3 py-1 rounded-sm text-xs text-black font-medium border bg-gradient-to-br cursor-pointer hover:scale-105 transition-all duration-200 inter-medium`}>
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
