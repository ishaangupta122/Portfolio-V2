import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  pause?: number;
}

const TypewriterEffect = ({
  text,
  speed = 100,
  pause = 1000,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < text.length) {
      // Typing forward
      typingTimeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting backward
      typingTimeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length - 1));
      }, speed);
    } else if (displayText.length === text.length && !isDeleting) {
      // Pause when fully typed
      typingTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (displayText.length === 0 && isDeleting) {
      // Restart typing after delete
      setIsDeleting(false);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, text, speed, pause]);

  return <span className="pr-1">{displayText}</span>;
};

export default TypewriterEffect;
