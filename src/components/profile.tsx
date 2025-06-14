import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import SocialBar from "./socials";
import TypewriterEffect from "./typewrite-effect";
import { useTheme } from "@/context/theme-provider";
import { about } from "@/data";
import ContactSection from "./contact";

export default function Profile() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col lg:px-10 lg:flex-row w-full h-full">
      {/* Left Side Section */}
      <div className="h-full w-full lg:w-[35%] lg:max-w-xl flex flex-col gap-4 px-8 lg:py-14 pt-14 pb-6 lg:fixed">
        <div className="w-full">
          <img
            src={about.image}
            alt={about.name}
            className="w-30 h-30 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col text-5xl font-semibold tracking-tight">
            <span>Hey, I'm </span>
            <span className="">{about.name}</span>
          </div>
          <div
            className={`text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
              theme === "dark"
                ? "from-[#3be6f6] to-[#093adc]"
                : "from-red-600 via-blue-900 to-[#19027e]"
            }`}>
            <TypewriterEffect text={about.title} speed={50} />
          </div>
          <p
            className={` text-base font-medium ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}>
            {about.description}
          </p>
        </div>

        {/* Social Bar */}
        <div className="mt-auto">
          <SocialBar />
        </div>
      </div>

      {/* Right Side Section */}
      <main className="w-full lg:ml-auto lg:w-[60%] px-6 py-10 max-w-3xl lg:mb-10">
        <div className="space-y-10">
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
