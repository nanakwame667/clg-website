import React, { FC } from "react";

interface FooterImageProps {
  backgroundImage: string;
  className?: string;
}

const FooterImage: FC<FooterImageProps> = ({ backgroundImage, className }) => {
  return (
    <div
      className={`footer-image relative w-full h-[350px] my-10 bg-cover bg-no-repeat bg-center bg-fixed ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#000] opacity-20 bg-blend-overlay"></div>
    </div>
  );
};

export default React.memo(FooterImage);
