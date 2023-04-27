import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/banner.jpg";
import Locations from "../assets/images/locations.svg";
import ServiceComponent from "../Components/Services/ServiceComponent";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection backgroundImage={Banner}>
        <h1
          className="header font-medium text-[60px]"
          data-aos="flip-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <span className="text-primary-500">CLG</span> CAPITAL
        </h1>
        <p
          className="sub text-[38px]"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-anchor-placement="top-bottom"
        >
          Creative Solutions for Raising Capital
        </p>
      </HeroSection>
      <div className="main-section flex flex-col h-96  items-center space-y-12 justify-center w-full text-center">
        <h1
          className="text-secondary-500 font-bold text-[50px]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Why are we so so great?
        </h1>
        <p
          className="text-black text-xl  w-3/4  "
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          CLG CAPITAL specializes in structured transactions. Our investment
          objective is to generate returns over time that are significantly
          above the stock market and generally uncorrelated with other
          investment strategies.
        </p>
      </div>
      <ServiceComponent />
      <div
        className="locations w-full h-[650px] bg-cover bg-no-repeat bg-center my-10"
        style={{ backgroundImage: `url(${Locations})` }}
      ></div>
      <p className="location-text text-center text-black font-normal text-2xl pt-6">
        Our global presence spans across multiple locations, ensuring we are
        well-
        <br />
        positioned to serve you with excellence.
      </p>
    </div>
  );
};

export default Home;
