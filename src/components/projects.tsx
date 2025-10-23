"use client";

import { FaGlobe, FaGithub, FaRegImage, FaPlayCircle } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { DATA } from "@/data";
import { useTheme } from "@/context/theme-provider";
import { ScrollAnimation } from "./scroll-animation";

export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className={`text-2xl inter-semibold mb-3`}>Projects</h2>
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
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Combine videos first, then images
  const mediaList = [
    ...(project.videos || []).map((src: string) => ({ type: "video", src })),
    ...(project.images || []).map((src: string) => ({ type: "image", src })),
  ];
  const totalMedia = mediaList.length;
  const hasNavigation = totalMedia > 1;

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Pause video when not in view or not current
  useEffect(() => {
    if (videoRef.current) {
      if (isInView && mediaList[current].type === "video") {
        videoRef.current.play().catch(() => {
          // Handle autoplay restriction
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, current, mediaList]);

  const next = () => setCurrent((prev: number) => (prev + 1) % totalMedia);
  const prev = () =>
    setCurrent((prev: number) => (prev - 1 + totalMedia) % totalMedia);

  const media = mediaList[current];

  return (
    <div
      ref={cardRef}
      className={`${
        theme === "dark"
          ? "bg-black/20 text-white border-white/10"
          : "bg-white/20 text-black border-transparent"
      } flex flex-col border shadow-md shadow-black/10 rounded-lg`}>
      {/* Media */}
      <div
        className={`relative h-[200px] w-full rounded-t-md px-4 pt-4 ${
          theme === "dark"
            ? "bg-gradient-to-r from-[#82DFE4] to-[#3873BF]"
            : "bg-gradient-to-r from-[#EDA47D] to-[#A079EC]"
        }`}>
        <div className="relative h-full w-full flex items-center justify-center">
          {media.type === "image" ? (
            <>
              <Image
                key={media.src}
                src={media.src}
                alt={project.title}
                width={500}
                height={300}
                loading="lazy"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover object-top rounded-t-md transition-opacity duration-700 bg-black/60"
              />
              <span className="absolute top-2 left-2 bg-black/50 text-white p-1 rounded-full flex items-center justify-center">
                <FaRegImage size={16} />
              </span>
            </>
          ) : (
            <>
              {isInView ? (
                <video
                  ref={videoRef}
                  key={media.src}
                  src={media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover object-top rounded-t-md transition-opacity duration-700 bg-black/60"
                />
              ) : (
                <div className="w-full h-full bg-black/60 rounded-t-md flex items-center justify-center">
                  <FaPlayCircle size={48} className="text-white/50" />
                </div>
              )}
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
                aria-label="Previous media"
                className="absolute right-10 top-2 bg-black/40 hover:bg-black/70 text-white p-0.5 rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">
                <HiChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                aria-label="Next media"
                className="absolute right-2 top-2 bg-black/40 hover:bg-black/70 text-white p-0.5 rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer">
                <HiChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-1.5 mt-4 mb-1 min-h-3">
        {hasNavigation &&
          Array.from({ length: totalMedia }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to media ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                idx === current
                  ? "bg-black dark:bg-white scale-110"
                  : "bg-black/30 dark:bg-white/30 hover:bg-black/50 dark:hover:bg-gray-400"
              }`}></button>
          ))}
      </div>

      {/* Content */}
      <div className="px-3 pb-3 m-0 flex flex-col flex-grow">
        <h3 className="text-base inter-medium my-1">{project.title}</h3>
        <p
          className={`${
            theme === "dark" ? "text-gray-300" : "text-dark-600"
          } text-xs inter-regular mb-3`}>
          {project.description}
        </p>

        <div className="flex flex-wrap items-start justify-start gap-1 pb-4 mt-auto mb-auto">
          {project.techStack.map((tech: string, i: number) => (
            <span
              key={i}
              className={`${
                theme === "dark"
                  ? "bg-slate-800/70 border-gray-300/10 text-gray-200"
                  : "bg-slate-400/10 border-gray-600/20 text-gray-900"
              } px-2 py-0.5 rounded-sm text-xs border inter-regular`}>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 inter-semibold text-xs mt-auto">
          {project.websiteUrl && (
            <Link
              className={`${
                theme === "dark" ? "bg-white text-black" : "bg-black text-white"
              } flex items-center justify-center gap-1 rounded-sm cursor-pointer px-2 py-1 hover:scale-105 transition-all duration-200`}
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer">
              <FaGlobe size={14} />
              Website
            </Link>
          )}
          {project.sourceUrl && (
            <Link
              className={`${
                theme === "dark" ? "bg-white text-black" : "bg-black text-white"
              } flex items-center justify-center gap-1 rounded-sm cursor-pointer px-2 py-1 hover:scale-105 transition-all duration-200`}
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub size={14} />
              Source
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
