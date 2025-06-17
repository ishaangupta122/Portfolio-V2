import { useState, useEffect } from "react";
import { useTheme } from "@/context/theme-provider";
import TypewriterEffect from "./typewrite-effect";
import SocialBar from "./socials";
import { about } from "@/data";
import { Stagger } from "./stagger-effect";
import { ScrollAnimation } from "./scroll-animation";

export default function AboutSection() {
  const { theme } = useTheme();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isLargeScreen === null) return null;

  const Container = isLargeScreen ? Stagger : "div";
  const Item = isLargeScreen ? Stagger.Item : ScrollAnimation;

  return (
    <Container className="h-full w-full lg:w-[35%] lg:max-w-xl flex flex-col gap-4 px-8 lg:py-14 pt-14 pb-6 lg:fixed">
      {/* Image */}
      <Item className="w-full">
        <img
          src={about.image}
          alt={about.name}
          className="w-32 h-32 object-cover rounded-full shadow-md shadow-black/30"
        />
      </Item>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <Item>
          <div className="flex flex-col text-5xl inter-bold tracking-tight">
            <span>Hey, I'm </span>
            <span>{about.name}</span>
          </div>
        </Item>
        <Item>
          <div
            className={`text-3xl inter-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent ${
              theme === "dark"
                ? "from-[#3be6f6] to-[#093adc]"
                : "from-[#fc894a] to-[#8548ff]"
            }`}>
            <TypewriterEffect text={about.title} speed={50} />
          </div>
        </Item>
        <Item>
          <p
            className={`text-base inter-regular mt-3 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
            {about.description}
          </p>
        </Item>
      </div>

      {/* Social Bar */}
      <Item className="mt-auto">
        <SocialBar />
      </Item>
    </Container>
  );
}
