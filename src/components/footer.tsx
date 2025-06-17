import { DATA } from "@/data";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-center text-sm inter-regular tracking-tighter text-gray-700 dark:text-gray-400">
      <p>
        &copy; 2025 - All rights reserved. Made with
        <span className="animate-pulse cursor-pointer"> ❤️ </span> by{" "}
        <Link
          to={DATA.about.linkedin}
          target="_blank"
          className="inter-medium text-black dark:text-gray-200">
          Ishaan Gupta
        </Link>
      </p>
    </footer>
  );
}
