import React from "react";
import "./Board.scss";
import { Square } from "../Square/Square";
import { BoardProps, COLUMNS, ROWS } from "./Board.types";
import { getColsMark, getRowsMark, getSquareColor } from "./Board.utils";

export const Board: React.FC<BoardProps> = ({
  selectedSquare,
  boardState,
  onSquareClick,
}) => {
  return (
    <div className="board">
      {ROWS.map((row) => (
        <div className="board__row" key={`row-${row}`}>
          {COLUMNS.map((col, colIndex) => {
            const chessPiece = boardState[row - 1][colIndex];
            const squareId = `${row}${col}`;
            return (
              <Square
                key={squareId}
                color={getSquareColor(row, colIndex)}
                rowsMark={getRowsMark(col, row)}
                colsMark={getColsMark(row, col)}
                type={chessPiece?.type}
                onClick={() => onSquareClick(row, col, colIndex, chessPiece)}
                isSelected={selectedSquare === squareId}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
