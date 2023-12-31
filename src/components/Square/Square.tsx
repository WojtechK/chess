import React, { memo } from "react";
import clsx from "clsx";
import "./Square.scss";
import { SquareProps } from "./Square.types";
import { Piece } from "../Piece/Piece";

export const Square: React.FC<SquareProps> = memo(
  ({ color, type, rowsMark, colsMark, isSelected = false, ...props }) => {
    // should detect if the piece is dark or light based on type uppercase or lowercase
    const isDarkPiece = type === type?.toLowerCase();
    const pieceColor = isDarkPiece ? "b" : "w";
    const squareColor = color === "w" ? "light" : "dark";
    return (
      <div
        className={clsx(
          "square",
          `square--${squareColor}`,
          isSelected && "square--selected",
        )}
        {...props}
      >
        {rowsMark && <span className="square__row-mark">{rowsMark}</span>}
        {colsMark && <span className="square__col-mark">{colsMark}</span>}
        {type && <Piece type={type} color={pieceColor} />}
      </div>
    );
  },
);
