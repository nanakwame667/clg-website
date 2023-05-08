import React, { useEffect, memo } from "react";
import { NavLink, NavLinkProps, useNavigate } from "react-router-dom";

interface ReloadNavLinkProps extends NavLinkProps {}

const Link: React.FC<ReloadNavLinkProps> = ({
  to,
  className,
  style,
  children,
  ...rest
}) => {
  const navigate = useNavigate();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate(to as string, { replace: true });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [to]);

  return (
    <NavLink
      to={to}
      className={className}
      style={style}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default memo(Link);
