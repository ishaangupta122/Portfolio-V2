import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/theme-provider";
import TypewriterEffect from "./typewrite-effect";
import SocialBar from "./socials";
import { DATA } from "@/data";
import { Stagger } from "./stagger-effect";
import { ScrollAnimation } from "./scroll-animation";

export default function AboutSection() {
  const { theme } = useTheme();
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const draggingRef = useRef(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const startRef = useRef({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Lock scroll and add ESC to close when the overlay is open
  useEffect(() => {
    if (isProfileOpen) {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsProfileOpen(false);
          positionRef.current = { x: 0, y: 0 };
          if (imageRef.current) {
            imageRef.current.style.transform = "translate(0px, 0px)";
          }
        }
      };
      document.addEventListener("keydown", onKeyDown);
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKeyDown);
        document.body.style.overflow = originalOverflow;
      };
    } else {
      // Reset drag position when closing
      positionRef.current = { x: 0, y: 0 };
      if (imageRef.current)
        imageRef.current.style.transform = "translate(0px, 0px)";
    }
  }, [isProfileOpen]);

  // Drag functionality
  const applyTransform = () => {
    if (!imageRef.current) return;
    const { x, y } = positionRef.current;
    imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
    rafRef.current = null;
  };

  const scheduleTransform = () => {
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(applyTransform);
  };

  const endDrag = () => {
    draggingRef.current = false;
    positionRef.current = { x: 0, y: 0 };
    if (imageRef.current) {
      imageRef.current.style.transition = "transform 0.3s ease-out";
      imageRef.current.style.transform = "translate(0px, 0px)";
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.removeEventListener("mouseleave", onMouseUp);
    document.removeEventListener("touchmove", onTouchMove as any);
    document.removeEventListener("touchend", onMouseUp);
    document.removeEventListener("touchcancel", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!draggingRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const deltaX = clientX - startRef.current.x;
    const deltaY = clientY - startRef.current.y;
    const newX = lastPosRef.current.x + deltaX;
    const newY = lastPosRef.current.y + deltaY;
    // Constrain so the image never leaves the viewport
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = imageRef.current?.getBoundingClientRect();
    const imgW = rect?.width ?? 0;
    const imgH = rect?.height ?? 0;
    const maxX = Math.max(0, (vw - imgW) / 2);
    const maxY = Math.max(0, (vh - imgH) / 2);
    positionRef.current = {
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY)),
    };
    if (imageRef.current) imageRef.current.style.transition = "none";
    scheduleTransform();
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!draggingRef.current) return;
    if (e.cancelable) e.preventDefault();
    const t = e.touches[0];
    const deltaX = t.clientX - startRef.current.x;
    const deltaY = t.clientY - startRef.current.y;
    const newX = lastPosRef.current.x + deltaX;
    const newY = lastPosRef.current.y + deltaY;
    // Constrain so the image never leaves the viewport
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = imageRef.current?.getBoundingClientRect();
    const imgW = rect?.width ?? 0;
    const imgH = rect?.height ?? 0;
    const maxX = Math.max(0, (vw - imgW) / 2);
    const maxY = Math.max(0, (vh - imgH) / 2);
    positionRef.current = {
      x: Math.max(-maxX, Math.min(maxX, newX)),
      y: Math.max(-maxY, Math.min(maxY, newY)),
    };
    if (imageRef.current) imageRef.current.style.transition = "none";
    scheduleTransform();
  };

  const onMouseUp = () => endDrag();

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    startRef.current = { x: clientX, y: clientY };
    lastPosRef.current = positionRef.current;
    if (imageRef.current) imageRef.current.style.transition = "none";
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseUp);
    document.addEventListener(
      "touchmove",
      onTouchMove as any,
      { passive: false } as any
    );
    document.addEventListener("touchend", onMouseUp);
    document.addEventListener("touchcancel", onMouseUp);
  };

  if (isLargeScreen === null) return null;

  const Container = isLargeScreen ? Stagger : "div";
  const Item = isLargeScreen ? Stagger.Item : ScrollAnimation;

  return (
    <>
      <Container className="h-full w-full lg:w-[35%] lg:max-w-xl flex flex-col gap-4 px-6 lg:py-14 pt-14 lg:fixed">
        {/* Image with interactive hover */}
        <div className="w-full">
          <img
            src={DATA.about.image}
            alt={DATA.about.name}
            className="w-35 h-35 md:w-45 md:h-45 object-cover rounded-full cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03]"
            style={{ borderRadius: "9999px" }}
            onClick={() => setIsProfileOpen(true)}
          />
        </div>

        {/* Text */}
        <div className="mt-1 flex flex-col gap-1">
          <Item>
            <div
              className={`flex flex-col text-5xl inter-medium tracking-tight ${
                theme === "dark" ? "text-[#E2E8F0]" : "text-black"
              }`}>
              <span className="text-[2.6rem]">Hey, I'm </span>
              <span className="text-[2.6rem]">{DATA.about.name}</span>
            </div>
          </Item>
          <Item>
            <div
              className={`text-4xl inter-semibold tracking-tight bg-gradient-to-r bg-clip-text text-transparent ${
                theme === "dark"
                  ? "from-[#3be6f6] to-[#093adc]"
                  : "from-[#fc894a] to-[#8548ff]"
              }`}>
              <TypewriterEffect text={DATA.about.title} speed={50} />
            </div>
          </Item>
          <Item>
            <p
              className={`mt-2 text-base tracking-tight inter-regular ${
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
      {/* Fullscreen circular overlay */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-md backdrop-saturate-150"
          onClick={() => setIsProfileOpen(false)}>
          <img
            src={DATA.about.image}
            alt={DATA.about.name}
            ref={imageRef}
            className="rounded-full object-cover shadow-2xl ring-1 ring-white/20 transition-transform duration-300 ease-out scale-100 opacity-100 w-[84vmin] h-[84vmin] max-w-[92vw] max-h-[92vh] cursor-pointer active:cursor-pointer"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            style={{
              borderRadius: "9999px",
              transform: `translate(0px, 0px)`,
            }}
          />
        </div>
      )}
    </>
  );
}
