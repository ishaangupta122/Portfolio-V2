import { useTheme } from "@/context/theme-provider";

export const FixedGradient = () => {
  const { theme } = useTheme();

  return (
    <div>
      <div
        className={`
          fixed -top-30 -right-10
          w-120 h-80
          blur-3xl
          pointer-events-none
          z-[-1]
        `}
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle at top right, rgba(255, 200, 180, 1) 0%, #F4F0F0 100%)"
              : "radial-gradient(circle at top right, rgba(0, 128, 255, 0.5) 0%, rgba(0, 128, 255, 0) 100%)",
        }}
      />
    </div>
  );
};
