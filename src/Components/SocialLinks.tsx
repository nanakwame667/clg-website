import { SocialsData } from "../Data/SocialsData";
import { Link } from "react-router-dom";
const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full px-6">
      {SocialsData.map(({ id, svg, route }) => (
        <div>
          <ul>
            <li key={id} className="">
              <Link to={route}>
                <img src={svg} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
