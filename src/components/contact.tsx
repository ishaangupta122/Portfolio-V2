import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/data";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "./scroll-animation";

export default function Contact() {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 text-center max-w-2xl mx-auto dark:text-[#d8dee6] text-black">
      <ScrollAnimation>
        <h2 className="text-4xl inter-semibold mb-5 dark:text-white">
          Get in Touch
        </h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <div
          className={`md:text-lg mb-4 ${
            theme === "dark" ? "text-gray-200" : "text-gray-700"
          }`}>
          Want to chat ? DM me on{" "}
          <Link
            to={DATA.contact.linkedin}
            target="_blank"
            className="font-medium text-blue-500 hover:underline">
            LinkedIn
          </Link>{" "}
          /{" "}
          <Link
            to={DATA.contact.twitter}
            target="_blank"
            className="font-medium text-blue-500 hover:underline">
            X
          </Link>
          , or just send an email at{" "}
          <Link
            to={`mailto:${DATA.contact.mail}`}
            target="_blank"
            className="font-medium text-blue-500 hover:underline">
            {DATA.contact.mail}
          </Link>
          .
        </div>
      </ScrollAnimation>
    </section>
  );
}
