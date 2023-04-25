import { useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import Close from "../assets/images/cancel.svg";
import Menu from "../assets/images/menu.svg";
import { LinksData } from "../Data/LinksData";

const MainHeader = () => {
  const [open, setOpen] = useState(false);
  let activeStyle = {
    borderBottom: "2px solid rgba(234, 115, 23)",
  };

  return (
    <div>
      <Header
        stickyAt={890}
        className="flex flex-row items-center px-24 justify-between 
    lg:px-24"
      >
        <Logo />
        <nav>
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <img src={open ? Close : Menu} alt="menu" className="" />
          </button>
          <div
            className={`
          lg:flex
          lg:items-center
          lg:pb-0
          pb-12
          absolute
          lg:static
          lg:z-auto
          z-10
          left-0
          w-full
          lg:w-auto
          lg:pl-0
          pl-9
          transform
        translate-x-0
        duration-500
        ease-in
          ${
            open
              ? " h-screen top-20 opacity-100 flex flex-col items-start justify-content-center pt-14"
              : "top-[-490px]"
          } lg:opacity-100 
        `}
          >
            {LinksData.map(({ id, name, route }) => (
              <div>
                <ul>
                  <li
                    key={id}
                    className="lg:ml-8 lg:my-0 my-7 text-lg lg:px-5 font-light text-black-500 hover:text-black-400"
                  >
                    <NavLink
                      to={route}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </Header>
    </div>
  );
};

export default MainHeader;
