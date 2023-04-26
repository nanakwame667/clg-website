import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string; // default, primary, info, success, warning, danger, dark
  size?: string; // sm, md, lg
  disabled?: boolean;
  className?: string;
}
const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  variant = "primary",
  size = "md",
  disabled,
  ...rest
}) => {
  return (
    <button
      className={
        `btn ${variant} ${size} ${className}` + (disabled ? " disabled" : "")
      }
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
