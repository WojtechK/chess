import React, { memo } from "react";
import clsx from "clsx";
import "./Square.scss";
import { SquareProps } from "./Square.types";
import { Piece } from "../Piece/Piece";

export const Square: React.FC<SquareProps> = memo(
  ({ color, type, rowsMark, colsMark, isSelected = false, ...props }) => {
    const squareColor = color === "w" ? "white" : "black";
    // should detect if the piece is dark or light based on type uppercase or lowercase
    const isDarkPiece = type === type?.toLowerCase();
    const pieceColor = isDarkPiece ? "b" : "w";
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
        {type && (
          <div className="square__piece">
            {<Piece type={type} color={pieceColor} />}
          </div>
        )}
      </div>
    );
  },
);
