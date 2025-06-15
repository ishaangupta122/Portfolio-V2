import Experience from "@/components/experience";
import Education from "@/components/education";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import SocialBar from "./socials";
import TypewriterEffect from "./typewrite-effect";
import { useTheme } from "@/context/theme-provider";
import { about } from "@/data";
import ContactSection from "./contact";
import { ScrollAnimation } from "./animation";
import { motion } from "framer-motion";
import BlurShadow from "./blur-shadow";

export default function Profile() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col lg:px-10 lg:flex-row w-full h-full">
      {/* Left Side Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-full w-full lg:w-[35%] lg:max-w-xl flex flex-col gap-4 px-8 lg:py-14 pt-14 pb-6 lg:fixed">
        <div className="w-full">
          <img
            src={about.image}
            alt={about.name}
            className="w-32 h-32 object-cover rounded-full shadow-md shadow-black/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col text-5xl inter-bold">
            <span>Hey, I'm </span>
            <span>{about.name}</span>
          </div>
          <div
            className={`text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
              theme === "dark"
                ? "from-[#3be6f6] to-[#093adc]"
                : "from-[#fc894a] to-[#8548ff]"
            }`}>
            <TypewriterEffect text={about.title} speed={50} />
          </div>
          <p
            className={`text-base inter-regular mt-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
            {about.description}
          </p>
        </div>

        {/* Social Bar */}
        <div className="mt-auto">
          <SocialBar />
        </div>
      </motion.div>

      {/* Right Side Section */}
      <main className="w-full lg:ml-auto lg:w-[60%] px-6 py-14 max-w-3xl lg:mb-10">
        {/* Main Content */}
        <div className="space-y-10">
          <ScrollAnimation>
            <Experience />
          </ScrollAnimation>
          <ScrollAnimation>
            <Education />
          </ScrollAnimation>
          <ScrollAnimation>
            <Skills />
          </ScrollAnimation>
          <ScrollAnimation>
            <Projects />
          </ScrollAnimation>
          <ScrollAnimation>
            <ContactSection />
          </ScrollAnimation>
        </div>
        <BlurShadow
          className={`${
            theme === "dark" ? "from-black/85" : "from-gray-100/50"
          }`}
        />
      </main>
      <div
        className={`
    fixed -top-30 -right-10
    w-80 h-80
    blur-3xl
    pointer-events-none
    z-[-1]
  `}
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle at top right, rgba(255,200,180,1) 0%, #F4F0F0 100%)"
              : "radial-gradient(circle at top right, rgba(0,128,255,0.5) 0%, rgba(0,128,255,0) 100%)",
        }}
      />
    </div>
  );
}
