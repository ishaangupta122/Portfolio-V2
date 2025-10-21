import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import boy from "../assets/boy.lottie";

export const LottieAnimation = () => {
  return (
    <div>
      <DotLottieReact
        src={boy}
        loop
        autoplay
        className="w-35 h-35 md:w-40 md:h-40 object-cover rounded-full cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.03]"
      />
    </div>
  );
};
