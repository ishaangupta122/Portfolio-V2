import { useTheme } from "@/context/theme-provider";
import { skills } from "@/data";

export default function Skills() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={` ${
              theme === "dark"
                ? "from-[#004466] via-[#001c2c] to-[#001c2c] text-white"
                : "from-white to-white text-black"
            } px-3 py-1 rounded-sm text-sm text-black font-medium bg-gradient-to-br  cursor-pointer hover:scale-105 transition-all duration-300 font-mono`}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
