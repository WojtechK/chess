import React from "react";
import "./Board.scss";
import { Square } from "../Square/Square";
import { BoardProps, COLUMNS, ROWS } from "./Board.types";
import { getColsMark, getRowsMark, getSquareColor } from "./Board.utils";

export const Board: React.FC<BoardProps> = ({ fen, moves }) => {


  return (
    <div className="board">
      {ROWS.map((row) => (
        <div className="board__row" key={`row-${row}`}>
          {COLUMNS.map((col, colIndex) => (
            <Square
              key={`${row}-${col}`}
              backgroundColor={getSquareColor(row, colIndex)}
              rowsMark={getRowsMark(col, row)}
              colsMark={getColsMark(row, col)}
              chessPiece="bishop"
            />
          ))}
        </div>
      ))}
    </div>
  );
};
