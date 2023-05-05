// import { Link } from "react-router-dom";
import Link from "./Link";
const links = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Services",
    route: "/services",
  },
  {
    id: 3,
    name: "About",
    route: "/about",
  },
  {
    id: 4,
    name: "Management",
    route: "/team",
  },
];
const FooterLinks = () => {
  return (
    <div>
      {links.map(({ id, name, route }) => (
        <div>
          <ul>
            <li key={id} className="pt-6 hover:text-primary-300">
              <Link to={route}>{name}</Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
