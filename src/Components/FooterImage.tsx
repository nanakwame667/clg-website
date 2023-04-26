import React from "react";
import Banner from "../assets/images/footer-banner.jpg";

const FooterImage = () => {
  return (
    <div
      className={`relative w-full h-[400px] my-10 bg-cover bg-no-repeat bg-center`}
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="absolute inset-0 bg-[#000] opacity-40 bg-blend-overlay"></div>
    </div>
  );
};

export default FooterImage;
