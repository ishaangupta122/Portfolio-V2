import { FaGlobe, FaGithub, FaRegImage, FaPlayCircle } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DATA } from "@/data";
import { useTheme } from "@/context/theme-provider";
import { ScrollAnimation } from "./scroll-animation";

export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className={`text-2xl inter-bold mb-3`}>Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATA.projects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}

export function ProjectCard({ project }: { project: any }) {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);
  // Combine videos first, then images
  const mediaList = [
    ...(project.videos || []).map((src: string) => ({ type: "video", src })),
    ...(project.images || []).map((src: string) => ({ type: "image", src })),
  ];
  const totalMedia = mediaList.length;
  const hasNavigation = totalMedia > 1;

  const next = () => setCurrent((prev: number) => (prev + 1) % totalMedia);
  const prev = () =>
    setCurrent((prev: number) => (prev - 1 + totalMedia) % totalMedia);

  const media = mediaList[current];

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-black/20 text-white border-white/10"
          : "bg-white/20 text-black border-transparent"
      } flex flex-col border shadow-md shadow-black/10 rounded-lg`}>
      {/* Media */}
      <div
        className={`relative w-full rounded-t-lg px-5 pt-5 ${
          theme === "dark"
            ? "bg-gradient-to-r from-[#82DFE4] to-[#3873BF]"
            : "bg-gradient-to-r from-[#EDA47D] to-[#A079EC]"
        }`}
        style={{ height: "220px" }}>
        <div className="relative h-full w-full overflow-hidden rounded-t-lg flex items-center justify-center">
          {media.type === "image" ? (
            <>
              <img
                key={media.src}
                src={media.src}
                alt={project.title}
                className="w-full h-full object-fill rounded-t-lg transition-opacity duration-700 bg-black/60"
                style={{ maxHeight: "220px", maxWidth: "100%" }}
              />
              <span className="absolute top-2 left-2 bg-black/50 text-white p-1 rounded-full flex items-center justify-center">
                <FaRegImage size={16} />
              </span>
            </>
          ) : (
            <>
              <video
                key={media.src}
                src={media.src}
                autoPlay
                loop
                muted
                className="w-full h-full object-fill rounded-t-lg transition-opacity duration-700 bg-black/60"
                style={{ maxHeight: "220px", maxWidth: "100%" }}
              />
              <span className="absolute top-2 left-2 bg-black/50 text-white p-1 rounded-full flex items-center justify-center">
                <FaPlayCircle size={16} />
              </span>
            </>
          )}

          {/* Nav buttons */}
          {hasNavigation && (
            <>
              <button
                onClick={prev}
                className="absolute right-10 top-2 bg-black/40 hover:bg-black/70 text-white p-0.5 rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">
                <HiChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-2 bg-black/40 hover:bg-black/70 text-white p-0.5 rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">
                <HiChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-4 mb-1 min-h-[12px]">
        {hasNavigation &&
          Array.from({ length: totalMedia }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                idx === current
                  ? "bg-black dark:bg-white scale-110"
                  : "bg-black/30 dark:bg-white/30 hover:bg-black/50 dark:hover:bg-gray-400"
              }`}></button>
          ))}
      </div>

      {/* Content */}
      <div className="px-3 pb-3 m-0 flex flex-col flex-grow">
        <h3 className="text-base inter-semibold my-1">{project.title}</h3>
        <p
          className={`${
            theme === "dark" ? "text-gray-300" : "text-dark-600"
          } text-xs inter-regular mb-3`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.map((tech: string, i: number) => (
            <span
              key={i}
              className={`${
                theme === "dark"
                  ? "bg-slate-800 border-slate-700 text-white"
                  : "bg-white border-gray-200 text-black"
              } px-2 py-1 rounded-sm text-xs border inter-regular`}>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 inter-semibold text-xs mt-auto">
          {project.websiteUrl && (
            <Link
              className={`${
                theme === "dark" ? "bg-white text-black" : "bg-black text-white"
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
                theme === "dark" ? "bg-white text-black" : "bg-black text-white"
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
  );
}
