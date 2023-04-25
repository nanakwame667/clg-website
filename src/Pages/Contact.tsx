import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/contact-banner.jpg";

const Contact = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className=" font-medium text-[60px]">
          CONTACT
          <span className="text-primary-500">US</span>
        </h1>
      </HeroSection>
    </div>
  );
};

export default Contact;
