import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/context/theme-provider";
import { projects } from "@/data";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Projects() {
  const { theme } = useTheme();
  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className={`${
              theme === "dark"
                ? "bg-black/20 text-white"
                : "bg-white/20 text-black"
            } p-0 flex flex-col`} // Make the Card flex column
          >
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

            <CardContent className="p-4 flex flex-col flex-grow">
              <div>
                <h3 className="text-lg font-semibold mb-2 font-mono tracking-tighter">
                  {project.title}
                </h3>
                <p
                  className={`${
                    theme === "dark" ? "text-gray-400" : "text-dark-600"
                  } text-xs mb-3`}>
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
                      } p-1 rounded-md text-xs border font-mono tracking-tighter`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 font-mono uppercase font-semibold mt-auto">
                {project.websiteUrl && (
                  <Link
                    className={`${
                      theme === "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    } flex items-center justify-center gap-2 rounded-md cursor-pointer px-2 py-1 text-sm hover:scale-105 transition-all duration-200`}
                    to={project.websiteUrl}
                    target="_blank">
                    <FaGlobe size={16} />
                    Website
                  </Link>
                )}
                {project.sourceUrl && (
                  <Link
                    className={`${
                      theme === "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    } flex items-center justify-center gap-2 rounded-md cursor-pointer px-2 py-1 text-sm hover:scale-105 transition-all duration-200`}
                    to={project.sourceUrl}
                    target="_blank">
                    <FaGithub size={16} />
                    Source
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
