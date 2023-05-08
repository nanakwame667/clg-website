import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import ContactDetails from "./ContactDetails";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="footer flex flex-col w-full px-24 py-36 text-white bg-secondary-500 mt-10 items-center justify-center space-y-40 ">
      <div className="footer-inner flex flex-row  w-full justify-between items-center ">
        <div className="flex flex-col items-center space-y-6">
          <Logo className="w-[220px]" />
          <h1 className="text-[24px]">Growth Capital</h1>
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
      </div>
      <div className="w-full flex items-center justify-center">
        <h1>
          Copyright©<span className="text-primary-500 text-center">2023</span>
          ,CLG Capital
        </h1>
      </div>
    </div>
  );
};

export default Footer;
