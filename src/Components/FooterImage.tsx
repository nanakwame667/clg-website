import React from "react";
import Banner from "../assets/images/footer-banner.jpg";

const FooterImage = () => {
  return (
    <div
      className={`relative w-full h-[350px] my-10 bg-cover bg-no-repeat bg-center bg-fixed`}
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="absolute inset-0 bg-[#000] opacity-20 bg-blend-overlay"></div>
    </div>
  );
};

export default FooterImage;
