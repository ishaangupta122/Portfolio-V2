import AboutSection from "./about";
import Resume from "./resume";

export default function Profile() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:px-10 lg:flex-row w-full h-full">
        <AboutSection />
        <Resume />
      </div>
    </div>
  );
}
