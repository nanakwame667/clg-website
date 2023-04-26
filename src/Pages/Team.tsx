import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/teams-banner.jpg";
import TeamDetails from "../Components/TeamDetails";

const Team = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className=" font-medium text-[60px]">
          <span className="text-primary-500">OUR</span> TEAM
        </h1>
      </HeroSection>

      <TeamDetails />
    </div>
  );
};

export default Team;
