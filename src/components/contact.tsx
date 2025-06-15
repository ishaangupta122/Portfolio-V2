import { contact } from "@/data";
import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <div className="text-base tracking-tight mb-2">
        Want to chat ? Just shoot me a DM on{" "}
        <Link
          to={contact.twitter}
          target="_blank"
          className="text-blue-500 underline">
          Twitter
        </Link>{" "}
        /{" "}
        <Link
          to={contact.linkedin}
          target="_blank"
          className="text-blue-500 underline">
          LinkedIn
        </Link>{" "}
        , or send me an email at{" "}
        <Link
          to={`mailto:${contact.mail}`}
          target="_blank"
          className="text-blue-500 underline">
          {contact.mail}
        </Link>{" "}
        .
      </div>
    </section>
  );
}
