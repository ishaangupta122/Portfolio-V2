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
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`${
              theme === "dark"
                ? "bg-black/20 text-white"
                : "bg-white/20 text-black"
            } p-0`}>
            <div className="relative w-full h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-4">
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
                        ? "bg-slate-900  border-slate-800 text-white"
                        : "bg-white border-gray-200 text-black"
                    } px-2 py-1 rounded-md text-xs border font-mono tracking-tighter`}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 font-mono uppercase font-semibold">
                <Link
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }  flex items-center justify-center gap-2 rounded-md cursor-pointer px-2 py-1 text-sm`}
                  to={project.websiteUrl}
                  target="_blank">
                  <FaGlobe size={16} />
                  Website
                </Link>
                <Link
                  className={`${
                    theme === "dark"
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }  flex items-center justify-center gap-2 rounded-md cursor-pointer px-2 py-1 text-sm`}
                  to={project.sourceUrl}
                  target="_blank">
                  <FaGithub size={16} />
                  Source
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
