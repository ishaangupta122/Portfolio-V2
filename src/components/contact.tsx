"use client";

import { useTheme } from "@/context/theme-provider";
import { DATA } from "@/lib/data";
import Link from "next/link";
import { ScrollAnimation } from "./scroll-animation";
import { motion } from "framer-motion";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col items-center justify-center pb-24 md:pb-0 pt-14 px-4 text-center max-w-2xl mx-auto dark:text-[#d8dee6] text-black">
      <ScrollAnimation direction="up">
        <h2 className={`text-4xl inter-semibold mb-5 dark:text-white`}>
          Get in Touch
        </h2>
      </ScrollAnimation>
      <ScrollAnimation direction="up" delay={0.1}>
        <div
          className={`text-[0.95rem] md:text-base inter-medium tracking-tight ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}>
          Want to chat? DM me on{" "}
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}>
            <Link
              href={DATA.contact.linkedin}
              target="_blank"
              className="font-medium dark:text-blue-400 text-blue-500 hover:underline">
              LinkedIn
            </Link>
          </motion.span>
          {" / "}
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}>
            <Link
              href={DATA.contact.twitter}
              target="_blank"
              className="font-medium dark:text-blue-400 text-blue-500 hover:underline">
              X
            </Link>
          </motion.span>
          , or just send an email at{" "}
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}>
            <Link
              href={`mailto:${DATA.contact.mail}`}
              className="font-medium dark:text-blue-400 text-blue-500 hover:underline">
              {DATA.contact.mail}
            </Link>
          </motion.span>
          .
        </div>
      </ScrollAnimation>
    </section>
  );
}
