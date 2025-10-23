import { useState, useEffect } from "react";
import { useTheme } from "@/context/theme-provider";
import TypewriterEffect from "./typewrite-effect";
import SocialBar from "./socials";
import { DATA } from "@/data";
import { Stagger } from "./stagger-effect";
import { ScrollAnimation } from "./scroll-animation";
import { LottieAnimation } from "./lottie-animation";

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
    <>
      <Container className="h-full w-full lg:w-[35%] lg:max-w-xl flex flex-col gap-4 px-6 lg:py-14 pt-14 lg:fixed">
        {/* Image */}
        <div className="w-full">
          {/* <img
            src={DATA.about.image}
            alt={DATA.about.name}
            className="w-35 h-35 md:w-45 md:h-45 object-cover rounded-full cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03]"
          /> */}
          <LottieAnimation />
        </div>

        {/* Text */}
        <div className="mt-1 flex flex-col gap-1">
          <Item>
            <div
              className={`flex flex-col text-4xl md:text-5xl inter-semibold  ${
                theme === "dark" ? "text-[#eef0f3]" : ""
              }`}>
              <span className="text-[2rem] md:text-[2.3rem]">Hey, I'm </span>
              <span className="text-[2rem] md:text-[2.3rem]">
                {DATA.about.name}
              </span>
            </div>
          </Item>
          <Item>
            <div
              className={`inter-bold bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "dark"
                  ? "from-[#3be6f6] to-[#093adc]"
                  : "from-[#ff7124] to-[#6e26ff]"
              }`}>
              <span className="text-[1.5rem] md:text-[1.8rem]">
                <TypewriterEffect text={DATA.about.title} speed={50} />
              </span>
            </div>
          </Item>
          <Item>
            <p
              className={`text-sm tracking-tight inter-medium ${
                theme === "dark" ? "text-gray-300/90" : "text-gray-700"
              }`}>
              {DATA.about.description}
            </p>
          </Item>
        </div>

        {/* Social Bar */}
        <Item className="">
          <SocialBar />
        </Item>
      </Container>
    </>
  );
}
