import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/teams-banner.png";
import TeamDetails from "../Components/TeamDetails";
import FooterImage from "../Components/FooterImage";

const Team = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        {/* <h1 className="header font-light text-[60px]">
          <span className="text-white font-bold">LEADERSHIP</span>
        </h1> */}
      </HeroSection>

      <TeamDetails />
      <FooterImage backgroundImage={Banner} />
    </div>
  );
};

export default React.memo(Team);
