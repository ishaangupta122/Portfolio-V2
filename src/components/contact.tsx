import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/data";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "./scroll-animation";

export default function Contact() {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center justify-center pb-14 md:pb-0 pt-14 px-4 text-center max-w-2xl mx-auto dark:text-[#d8dee6] text-black">
      <ScrollAnimation>
        <h2 className="text-4xl inter-semibold mb-5 dark:text-white">
          Get in Touch
        </h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <div
          className={`text-[.9rem] md:text-base inter-regular tracking-tight ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
          Want to chat ? DM me on{" "}
          <Link
            to={DATA.contact.linkedin}
            target="_blank"
            className="font-medium dark:text-blue-400 text-blue-500 hover:underline">
            LinkedIn
          </Link>{" "}
          /{" "}
          <Link
            to={DATA.contact.twitter}
            target="_blank"
            className="font-medium dark:text-blue-400 text-blue-500 hover:underline">
            X
          </Link>
          , or just send an email at{" "}
          <Link
            to={`mailto:${DATA.contact.mail}`}
            target="_blank"
            className="font-medium dark:text-blue-400 text-blue-500 hover:underline">
            {DATA.contact.mail}
          </Link>
          .
        </div>
      </ScrollAnimation>
    </section>
  );
}
