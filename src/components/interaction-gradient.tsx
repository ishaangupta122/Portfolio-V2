import { useTheme } from "@/context/theme-provider";
import { useEffect, useState } from "react";

const InteractionGradient = () => {
  const { theme } = useTheme(); // assuming 'light' | 'dark'
  const [coords, setCoords] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradient =
    theme === "light"
      ? `
    radial-gradient(
      circle at ${coords.x * 100}% ${coords.y * 100}%,
      rgba(255, 200, 180, 0.4) 0%,
      #F4F0F0 40%
    )
  `
      : `
    radial-gradient(
      circle at ${coords.x * 100}% ${coords.y * 100}%,
      rgba(0, 128, 255, 0.3) 0%,
      rgba(0, 128, 255, 0) 50%
    )
  `;

  const gradientStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: -1,
    background: gradient,
    transition: "background 0.1s ease",
  };

  return <div style={gradientStyle}></div>;
};

export default InteractionGradient;
