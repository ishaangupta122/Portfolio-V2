import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Contact from "./contact";
import Footer from "./footer";
// import { BlurShadow } from "./blur-shadow";
// import { useTheme } from "@/context/theme-provider";

export default function Resume() {
  // const { theme } = useTheme();

  return (
    <main className="w-full lg:ml-auto lg:w-[60%] px-6 py-14 max-w-3xl lg:mb-10">
      <div className="space-y-10">
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {/* <BlurShadow
        className={`${theme === "dark" ? "from-black/85" : "from-black/30"}`}
      /> */}
    </main>
  );
}
