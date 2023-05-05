import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/services-banner.jpg";
import { ServicesData } from "../Data/ServicesData";

const Services = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className="header font-light text-[60px]">
          <span className="text-white font-bold">OUR</span> SERVICES
        </h1>
      </HeroSection>
      <div className="main-section flex flex-col h-96  items-center space-y-12 justify-center w-full text-center">
        <h1
          className="text-secondary-500 font-semibold text-[50px]"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          What we do
        </h1>
        <p
          className="text-black text-xl  w-3/4  "
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          At CLG Capital, we specialize in providing a comprehensive suite of
          financial services, expertly designed to empower small and mid-cap
          companies to thrive in today's competitive business landscape. Our
          extensive experience and proven track record set the foundation for
          success, as we partner with you to achieve your strategic objectives.
        </p>
      </div>

      <div
        className="flex flex-col items-center lg:mt-6"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h1 className="text-secondary-500 font-semibold text-[36px]">
          Services
        </h1>
        <div className="bg-primary-500 w-[100px] h-[2px] mt-2"></div>
      </div>
      <div className="service px-24 w-full my-10">
        {ServicesData.map(({ id, title, text, svg }) => (
          <div
            key={id}
            className="service-item flex flex-row w-full items-center space-x-16 py-20"
            data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="flex items-center justify-center bg-primary-50 px-4 py-4 lg:px-6 lg:py-6 rounded-full">
              <img
                src={svg}
                alt=""
                width={100}
                className=" w-[80px] lg:w-[100px]"
              />
            </div>
            <div className="space-y-4 mt-6">
              <h1 className="text-secondary-500 font-medium text-[28px]">
                {title}
              </h1>
              <p className="text-black text-[20px]">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
