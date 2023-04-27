import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleNavLinkClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header
        stickyAt={890}
        className="flex flex-row items-center px-10 justify-between

    lg:px-24"
      >
        <Logo />
        <nav>
          <div className="relative z-20">
            <button
              className="lg:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <img src={open ? Close : Menu} alt="menu" className="" />
            </button>
          </div>
          <div
            className={`
            nav-header
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
          h-screen
          lg:h-auto
          lg:w-auto
          lg:pl-0
          pl-9
          transform
          transition-transform
          duration-500
          ease-in
          overflow-y-hidden
          ${
            open
              ? "top-0 bg-secondary-500 opacity-100 flex flex-col items-start justify-center pt-14"
              : "-translate-y-full lg:translate-y-0"
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
                      onClick={handleNavLinkClick}
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
