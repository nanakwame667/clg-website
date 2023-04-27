import React from "react";
import ServicesItem from "./ServicesItem";

const ServiceComponent = () => {
  return (
    <div
      className="main-section flex flex-col items-center w-full text-center space-y-12 mb-20"
      data-aos-container="body"
    >
      <h1
        className="text-secondary-500 font-bold text-[50px]"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        Our Services
      </h1>
      <p
        className="text-black text-xl  w-3/4"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        Don't miss out on these game-changing services!
      </p>
      <ServicesItem />
    </div>
  );
};

export default ServiceComponent;
