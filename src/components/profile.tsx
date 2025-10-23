import AboutSection from "./about";
// import Experience from "@/components/experience";
import Contact from "./contact";
import Education from "./education";
import Projects from "./projects";
import Skills from "./skills";

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:px-10 lg:flex-row w-full h-full">
        <AboutSection />
        <div className="w-full lg:ml-auto lg:w-[60%] px-6 md:py-14 py-7 max-w-3xl lg:mb-10">
          <div className="space-y-10">
            {/* <Experience /> */}
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
