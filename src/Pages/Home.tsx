import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/banner.jpg";
import Locations from "../assets/images/locations.svg";
import ServiceComponent from "../Components/Services/ServiceComponent";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection backgroundImage={Banner}>
        <h1 className=" font-medium text-[60px]">
          <span className="text-primary-500">CLG</span> CAPITAL
        </h1>
        <p className="text-[38px]">Creative Solutions for Raising Capital</p>
      </HeroSection>
      <div className="flex flex-col h-96  items-center space-y-12 justify-center w-full text-center">
        <h1 className="text-secondary-500 font-bold text-[50px]">
          Why are we so so great?
        </h1>
        <p className="text-black text-xl  w-3/4  ">
          CLG CAPITAL specializes in structured transactions. Our investment
          objective is to generate returns over time that are significantly
          above the stock market and generally uncorrelated with other
          investment strategies.
        </p>
      </div>
      <ServiceComponent />
      <div
        className="w-full h-[650px] bg-cover bg-no-repeat bg-center my-10"
        style={{ backgroundImage: `url(${Locations})` }}
      ></div>
      <p className="text-center text-black font-normal text-2xl pt-6">
        Our global presence spans across multiple locations, ensuring we are
        well-
        <br />
        positioned to serve you with excellence.
      </p>
    </div>
  );
};

export default Home;
