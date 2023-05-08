import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { memo } from "react";

interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div>
      <Link to={"/"} className="flex items-center justify-center">
        <img className={`w-[150px] ${className}`} src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default memo(Logo);
