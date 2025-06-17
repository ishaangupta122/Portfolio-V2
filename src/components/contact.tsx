import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/data";
import { Link } from "react-router-dom";
import { ScrollAnimation } from "./scroll-animation";

export default function Contact() {
  const { theme } = useTheme();
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 text-center max-w-2xl mx-auto">
      <ScrollAnimation>
        <h2 className="text-5xl inter-bold mb-5">Get in Touch</h2>
      </ScrollAnimation>
      <ScrollAnimation>
        <div
          className={`text-lg inter-medium mb-4 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
          Want to chat ? Just shoot me a DM on{" "}
          <Link
            to={DATA.contact.twitter}
            target="_blank"
            className="text-blue-500 hover:underline">
            Twitter
          </Link>{" "}
          /{" "}
          <Link
            to={DATA.contact.linkedin}
            target="_blank"
            className="text-blue-500 hover:underline">
            LinkedIn
          </Link>
          , or send me an email at{" "}
          <Link
            to={`mailto:${DATA.contact.mail}`}
            target="_blank"
            className="text-blue-500 hover:underline">
            {DATA.contact.mail}
          </Link>
          .
        </div>
      </ScrollAnimation>
    </section>
  );
}
