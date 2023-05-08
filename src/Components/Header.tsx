import React, { useState, useEffect, memo } from "react";

interface HeaderProps {
  stickyAt: number;
  className?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ stickyAt, className, children }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= stickyAt) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stickyAt]);

  return (
    <header
      className={`${
        isSticky
          ? "bg-secondary-500 text-black font-bold"
          : "bg-[#000] bg-opacity-40 text-white"
      } fixed top-0 left-0 w-full h-[120px] z-20 transition-colors duration-500  ${className}`}
    >
      {children}
    </header>
  );
};

export default memo(Header);
