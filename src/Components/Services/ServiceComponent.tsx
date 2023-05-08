import React from "react";
import ServicesItem from "./ServicesItem";

const ServiceComponent = () => {
  return (
    <div
      className="main-section flex flex-col items-center w-full text-center space-y-12 mb-20"
      data-aos-container="body"
    >
      <ServicesItem />
    </div>
  );
};

export default ServiceComponent;
