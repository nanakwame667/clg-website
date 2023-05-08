import React from "react";
import HeroSection from "../Components/HeroSection";
import Banner from "../assets/images/new-about-banner.jpg";
import Highlights from "../Components/Highlights";
import Locations from "../assets/images/locations.svg";
import FooterImage from "../Components/FooterImage";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <HeroSection backgroundImage={Banner}>
        <h1 className="header font-light text-[60px]">
          <span className="text-white font-bold">ABOUT</span> US
        </h1>
      </HeroSection>
      <Helmet>
        <title>Company Profile</title>
        <meta
          name="about"
          content="Welcome to CLG Capital, your trusted partner in providing
            exceptional lending solutions to small and mid-cap companies.
            Founded in 2023 by industry expert Charles Ofori, our firm is built
            on over 16 years of experience in working with and empowering
            businesses to reach their full potential."
        />
        <link rel="canonical" href="https://clgcap.com/about" />
      </Helmet>
      <div className="main-section flex flex-col h-full py-20  items-center space-y-12 justify-center w-full text-center">
        <h1
          className="text-secondary-500 font-semibold text-[50px]"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Company Profile
        </h1>
        <p
          className="text-black text-xl  w-3/4 "
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Welcome to CLG Capital, your trusted partner in providing exceptional
          lending solutions to small and mid-cap companies. Founded in 2023 by
          industry expert Charles Ofori, our firm is built on over 16 years of
          experience in working with and empowering businesses to reach their
          full potential.
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
      <div
        className="flex flex-col items-center mt-6"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h1 className="text-secondary-500 font-semibold text-[36px]">
          Highlights
        </h1>
        <div className="bg-primary-500 w-[100px] h-[2px] mt-2"></div>
      </div>
      <Highlights />
      <div
        className="locations w-full h-[650px] bg-cover bg-no-repeat bg-center my-10 2xl:h-[800px]"
        style={{ backgroundImage: `url(${Locations})` }}
      ></div>
      {/* <p className="location-text text-center text-black font-normal text-2xl pt-6">
        Our global presence spans across multiple locations, ensuring we are
        well-
        <br />
        positioned to serve you with excellence.
      </p> */}
      <FooterImage backgroundImage={Banner} />
    </div>
  );
};

export default React.memo(About);
