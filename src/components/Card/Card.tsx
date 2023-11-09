import React from "react";
import clsx from "clsx";
import { CardProps } from "./Card.types";
import "./Card.scss";

export const Card: React.FC<CardProps> = ({
  children,
  className,
  title,
  ...props
}) => {
  return (
    <div className={clsx("card", className)} {...props}>
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </div>
  );
};
