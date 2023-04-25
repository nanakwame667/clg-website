import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/about-banner.jpg";

const About = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className=" font-medium text-[60px]">
          <span className="text-primary-500">ABOUT</span> US
        </h1>
      </HeroSection>
    </div>
  );
};

export default About;
