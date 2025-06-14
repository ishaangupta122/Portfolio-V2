import { useTheme } from "@/context/theme-provider";
import { educations } from "@/data";

export default function Education() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold">Education</h2>
      <div className="">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="bg-transparent border-none shadow-none flex flex-row justify-center items-start md:items-center gap-4 py-4">
            <div className="relative w-13 h-13">
              <img
                src={edu.logo || "/education_img.jpg"}
                alt={`${edu.institution} Logo`}
                className="min-w-13 min-h-13 object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col w-full p-0">
              <div className="flex flex-wrap justify-between items-center gap-1 font-mono">
                <h3 className="font-semibold text-lg">{edu.institution}</h3>
                <span
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-dark-500"
                  } uppercase tracking-wider`}>
                  {edu.period}
                </span>
              </div>
              <p className="text-sm font-mono md:mt-0 mt-1">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
