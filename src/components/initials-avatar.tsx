import type { InitialsAvatarProps } from "@/types";

const InitialsAvatar: React.FC<InitialsAvatarProps> = ({ name, style }) => {
  const getInitials = (input: string): string => {
    if (!input) return "";
    const words = input.trim().split(/\s+/);
    return words
      .map((word) => word[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div
      className={`text-sm flex items-center justify-center rounded-full dark:bg-[#e8eaed] dark:text-black bg-black text-[#d8dee6]  font-bold uppercase tracking-wide ${style}`}>
      {initials}
    </div>
  );
};

export default InitialsAvatar;
