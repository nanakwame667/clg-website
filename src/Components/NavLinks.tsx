import React from "react";
import { LinksData } from "../Data/LinksData";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      {LinksData.map(({ id, name, route }) => (
        <div>
          <ul>
            <li key={id}>
              <Link to={route}>{name}</Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
