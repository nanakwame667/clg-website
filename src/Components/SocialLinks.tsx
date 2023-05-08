import { SocialsData } from "../Data/SocialsData";
import { memo } from "react";
const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full px-6">
      {SocialsData.map(({ id, svg, route }) => (
        <div>
          <ul>
            <li key={id} className="">
              <a href={route} target="_blank" rel="noopener noreferrer">
                <img src={svg} alt="" />
              </a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default memo(SocialLinks);
