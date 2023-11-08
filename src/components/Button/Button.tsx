import { ButtonProps } from "./Button.types";
import "./Button.scss";
import clsx from "clsx";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button className={clsx("button", `button--${variant}`)} {...props}>
      {children}
    </button>
  );
};
