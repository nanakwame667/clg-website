import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/banner.jpg";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection backgroundImage={Banner}>
        <h1 className=" font-medium text-[60px]">
          <span className="text-primary-500">CLG</span> CAPITAL
        </h1>
        <p className="text-[38px]">Creative Solutions for Raising Capital</p>
      </HeroSection>
      {/* <p className="text-[100px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, delectus!
        Voluptate, amet? Iste quis molestias neque error dolore, incidunt culpa
        dolor, blanditiis enim obcaecati optio, tempora nam? Voluptas, mollitia
        non.
      </p> */}
    </div>
  );
};

export default Home;
