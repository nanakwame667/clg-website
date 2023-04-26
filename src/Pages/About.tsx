import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/about-banner.jpg";
import Highlights from "../Components/Highlights";

const About = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className=" font-medium text-[60px]">
          <span className="text-primary-500">ABOUT</span> US
        </h1>
      </HeroSection>
      <div className="flex flex-col h-full py-20  items-center space-y-12 justify-center w-full text-center">
        <h1 className="text-secondary-500 font-semibold text-[50px]">
          Company Profile
        </h1>
        <p className="text-black text-xl  w-3/4  ">
          Welcome to CLG Capital Management, your trusted partner in providing
          exceptional lending solutions to small and mid-cap companies. Founded
          in 2023 by industry expert Charles Ofori, our firm is built on over 16
          years of experience in working with and empowering businesses like
          yours to reach their full potential.
          <br />
          <br /> We take pride in our proven track record, a legacy that began
          with our predecessor investment company, Atlas Capital Markets LLC
          (2016-2023). At CLG Capital Management, our mission is to optimize
          investment return objectives in the small and mid-cap lending
          universe, tailoring our services to suit your unique needs and goals.
          <br />
          <br />
          Our expertise encompasses a diverse range of financial solutions,
          including bridge loans, acquisition financing, invoice and receivables
          financing, high yield bonds, equity derivatives, equity placements,
          and convertible bonds. Our dedication to working with qualified small
          and micro-cap companies ensures that we understand the intricacies of
          your business landscape, enabling us to offer unparalleled service and
          support.
        </p>
      </div>
      <div className="flex flex-col items-center mt-6">
        <h1 className="text-secondary-500 font-semibold text-[36px]">
          Highlights
        </h1>
        <div className="bg-primary-500 w-[100px] h-[2px] mt-2"></div>
      </div>
      <Highlights />
    </div>
  );
};

export default About;
