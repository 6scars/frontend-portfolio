import profile from "../images/img.jpg";

import { Projects } from "./HomeSection/Projects";
import { HomeSection } from "./HomeSection/HomeSection";
import { Contact } from "./HomeSection/Contact";

export function ExternalHomeSection() {
  return (
    <>
      <div className="home gradient-wrapper flex flex-col md:flex-row gap-5 justify-center min-h-screen p-3">
        {/* Left side */}
        <HomeSection />

        <div className="home-right flex-1 flex flex-col gap-5">
            <Contact />
            <Projects/>
        </div>
      </div>
    </>
  );
}
