import type { InitialsAvatarProps } from "@/types";

const InitialsAvatar: React.FC<InitialsAvatarProps> = ({ name, style }) => {
  const getInitials = (input: string): string => {
    if (!input) return "";
    const words = input.trim().split(/\s+/);
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase();
    }
    const first = words[0][0];
    const last = words[words.length - 1][0];
    return `${first}${last}`.toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-br dark:from-[#82DFE4] dark:to-[#3873BF] from-[#EDA47D] to-[#A079EC] text-white font-bold uppercase tracking-wide ${style}`}>
      {initials}
    </div>
  );
};

export default InitialsAvatar;
