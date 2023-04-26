import React from "react";
import ServicesItem from "./ServicesItem";

const ServiceComponent = () => {
  return (
    <div className="flex flex-col items-center w-full text-center space-y-12 mb-20">
      <h1 className="text-secondary-500 font-bold text-[50px]">Our Services</h1>
      <p className="text-black text-xl  w-3/4  ">
        Don't miss out on these game-changing services!
      </p>
      <ServicesItem />
    </div>
  );
};

export default ServiceComponent;
