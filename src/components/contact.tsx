import { Link } from "react-router-dom";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <div className="text-base tracking-tight mb-2">
        Want to chat ? Just shoot me a DM on{" "}
        <Link
          to="https://twitter.com/"
          target="_blank"
          className="text-blue-500 underline">
          Twitter
        </Link>{" "}
        /{" "}
        <Link
          to="https://www.linkedin.com/"
          target="_blank"
          className="text-blue-500 underline">
          LinkedIn
        </Link>{" "}
        , or send me an email at{" "}
        <Link
          to="mailto:ishaang2209@gmail.com"
          target="_blank"
          className="text-blue-500 underline">
          ishaang2209@gmail.com
        </Link>{" "}
        .
      </div>
    </section>
  );
}
