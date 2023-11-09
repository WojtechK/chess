import { ButtonProps } from "./Button.types";
import "./Button.scss";
import clsx from "clsx";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx("button", `button--${variant}`, className)}
      {...props}
    >
      {children}
    </button>
  );
};
