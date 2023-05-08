import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useLazyLoad } from "./useLazyLoad";

interface LogoProps {
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ className }) => {
  const { source, imageRef } = useLazyLoad(
    logo,
    "/path/to/default/placeholder/image.jpg"
  );
  return (
    <div ref={imageRef}>
      <Link to={"/"} className="flex items-center justify-center">
        <img className={`w-[150px] ${className}`} src={source} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
