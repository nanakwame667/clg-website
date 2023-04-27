import React, { ReactNode, FC } from "react";

interface HeroSectionProps {
  backgroundImage: string;
  children?: ReactNode;
  className?: string;
}
const HeroSection: FC<HeroSectionProps> = ({
  backgroundImage,
  children,
  className,
}) => {
  return (
    <div
      className={`hero relative w-full h-[850px] bg-cover bg-no-repeat bg-center ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#000] opacity-40 bg-blend-overlay"></div>
      <div className="relative z-10 flex flex-col text-white space-y-6 items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
