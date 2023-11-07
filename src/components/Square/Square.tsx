import React from "react";
import clsx from "clsx";
import "./Square.scss";
import { SquareProps } from "./Square.types";
import { Piece } from "../Piece/Piece";

export const Square: React.FC<SquareProps> = ({
  backgroundColor,
  chessPiece,
  rowsMark,
  colsMark,
  ...props
}) => {
  return (
    <div className={clsx("square", `square--${backgroundColor}`)} {...props}>
      {rowsMark && <span className="square__row-mark">{rowsMark}</span>}
      {colsMark && <span className="square__col-mark">{colsMark}</span>}
      {chessPiece && <div className="square__piece">{
        <Piece type={chessPiece} color={backgroundColor === "black" ? "white" : "black"} />
      }</div>}
    </div>
  );
};
