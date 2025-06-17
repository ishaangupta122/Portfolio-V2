import { useTheme } from "@/context/theme-provider";
import { projects } from "@/data";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "./scroll-animation";

export default function Projects() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-2xl inter-bold mb-3">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${
                theme === "dark"
                  ? "bg-black/20 text-white border-white/10"
                  : "bg-white/20 text-black border-transparent"
              } p-0 m-0 flex flex-col border shadow-md shadow-black/10 rounded-lg`}>
              <div
                className={`relative w-full h-48 px-4 pt-5 rounded-t-lg ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#82DFE4] to-[#3873BF]"
                    : "bg-gradient-to-r from-[#EDA47D] to-[#A079EC]"
                }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              <div className="p-3 mt-0 flex flex-col flex-grow">
                <div>
                  <h3 className="text-base inter-semibold mb-1">
                    {project.title}
                  </h3>
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-400" : "text-dark-600"
                    } text-xs inter-regular mb-3`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className={`${
                          theme === "dark"
                            ? "bg-slate-900 border-slate-800 text-white"
                            : "bg-white border-gray-200 text-black"
                        } px-2 py-1 rounded-md text-xs border inter-regular`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 inter-semibold text-xs mt-auto">
                  {project.websiteUrl && (
                    <Link
                      className={`${
                        theme === "dark"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      } flex items-center justify-center gap-1 rounded-md cursor-pointer px-2 py-1 hover:scale-105 transition-all duration-200`}
                      to={project.websiteUrl}
                      target="_blank">
                      <FaGlobe size={14} />
                      Website
                    </Link>
                  )}
                  {project.sourceUrl && (
                    <Link
                      className={`${
                        theme === "dark"
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      } flex items-center justify-center gap-1 rounded-md cursor-pointer px-2 py-1 hover:scale-105 transition-all duration-200`}
                      to={project.sourceUrl}
                      target="_blank">
                      <FaGithub size={14} />
                      Source
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
