import { useTheme } from "@/context/theme-provider";
import { educations } from "@/data";
import { Link } from "react-router-dom";

export default function Education() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-3">Education</h2>
      <div className="space-y-4">
        {educations.map((edu) => (
          <Link
            key={edu.id}
            to={edu.url}
            target="_blank"
            className="group bg-transparent border-none shadow-none flex flex-row justify-center items-start md:items-center gap-4 py-2">
            <div className="relative w-13 h-13">
              <img
                src={edu.logo || "/education_img.jpg"}
                alt={`${edu.institution} Logo`}
                className="min-w-13 min-h-13 object-cover rounded-full transition-transform duration-200 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col w-full p-0">
              <div className="flex flex-wrap justify-between items-center gap-1 font-mono">
                <h3 className="font-semibold text-lg transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  {edu.institution}
                </h3>
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-dark-500"
                  } uppercase tracking-wider`}>
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-mono md:mt-0 mt-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                {edu.degree}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
