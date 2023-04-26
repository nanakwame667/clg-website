import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import ContactDetails from "./ContactDetails";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-[600px] text-white bg-secondary-500 mt-10 items-center justify-center space-y-40 pt-20">
      <div className="flex flex-row px-24 w-full justify-between items-center">
        <div className="flex flex-col space-y-6">
          <Logo className="w-[220px]" />
          <h1>Creative Solutions for raising capital</h1>
          <SocialLinks />
        </div>
        <div className="flex flex-col">
          <h1 className="text-primary-500 font-medium text-xl">Contact Us</h1>
          <div>
            <ContactDetails />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-primary-500 font-medium text-xl">
            Special Links
          </h1>
          <div>
            <FooterLinks />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-primary-500 font-medium text-xl">Newsletter</h1>
          <Newsletter />
        </div>
      </div>
      <div>
        <h1>
          Copyright©<span className="text-primary-500 text-center">2023</span>
          ,CLG Capital
        </h1>
      </div>
    </div>
  );
};

export default Footer;
