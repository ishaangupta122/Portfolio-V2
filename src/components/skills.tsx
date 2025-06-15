import { useTheme } from "@/context/theme-provider";
import { skills } from "@/data";

export default function Skills() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-5">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className={` ${
              theme === "dark"
                ? "from-[#004466] via-[#001c2c] to-[#001c2c] border-white-2 text-white"
                : "from-gray-50 to-gray-100 text-black border-gray-200-2"
            } px-3 py-1 rounded-sm text-sm text-black font-medium border bg-gradient-to-br cursor-pointer hover:scale-105 transition-all duration-200 font-mono`}>
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
