import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import character from "../assets/character.lottie";

export const LottieAnimation = () => {
  return (
    <div>
      <DotLottieReact
        src={character}
        loop
        autoplay
        className="w-35 h-35 md:w-50 md:h-50 object-cover rounded-full cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03]"
      />
    </div>
  );
};
