import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/services-banner.jpg";

const Services = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className=" font-medium text-[60px]">
          <span className="text-primary-500">OUR</span> SERVICES
        </h1>
      </HeroSection>
      <div className="flex flex-col h-96  items-center space-y-12 justify-center w-full text-center">
        <h1 className="text-secondary-500 font-bold text-[50px]">What we do</h1>
        <p className="text-black text-xl  w-3/4  ">
          At CLG Capital Management, we specialize in providing a comprehensive
          suite of financial services, expertly designed to empower small and
          mid-cap companies to thrive in today's competitive business landscape.
          Our extensive experience and proven track record set the foundation
          for success, as we partner with you to achieve your strategic
          objectives.
        </p>
      </div>
    </div>
  );
};

export default Services;
