import React from "react";
import { NavLink, NavLinkProps, useNavigate } from "react-router-dom";

interface ReloadNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const Link: React.FC<ReloadNavLinkProps> = ({
  to,
  className,
  style,
  onClick,
  ...rest
}) => {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (onClick) {
      onClick();
    }
    navigate(to as string, { replace: true });
    setTimeout(() => {
      window.location.href = to as string; // force a full page reload
      window.scrollTo(0, 0); // scroll to top of page
    }, 0);
  };

  return (
    <NavLink
      to={to}
      className={className}
      style={style}
      onClick={handleClick}
      {...rest}
    />
  );
};

export default Link;
