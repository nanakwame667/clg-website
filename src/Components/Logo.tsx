import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to={"/"} className="flex items-center justify-center">
      <img className={`w-[150px] ${className}`} src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
