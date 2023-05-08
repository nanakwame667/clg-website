import React, { FC } from "react";
import { useLazyLoad } from "./useLazyLoad";

interface FooterImageProps {
  backgroundImage: string;
  className?: string;
}

const FooterImage: FC<FooterImageProps> = ({ backgroundImage, className }) => {
  // Use the custom useLazyLoad hook for the backgroundImage
  const { source, imageRef } = useLazyLoad(
    backgroundImage,
    "/path/to/default/placeholder/image.jpg"
  );
  return (
    <div
      ref={imageRef}
      className={`footer-image relative w-full h-[350px] my-10 bg-cover bg-no-repeat bg-center bg-fixed ${className}`}
      style={{ backgroundImage: `url(${source})` }}
    >
      <div className="absolute inset-0 bg-[#000] opacity-20 bg-blend-overlay"></div>
    </div>
  );
};

export default FooterImage;
