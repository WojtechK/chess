import { ColumnsType, RowsType } from "../Board/Board.types";
import { PieceType } from "../Piece/Piece.types";

export type SquareProps = {
  /**
   * background color of the square
   */
  backgroundColor: "black" | "white";
  /**
   * piece on the square
   */
  chessPiece?: PieceType;
  /**
   * mark for each row between 1 and 8
   */
  rowsMark?: RowsType;
  /**
   * mark for each column between a and h
   */
  colsMark?: ColumnsType; 
} & React.HTMLAttributes<HTMLDivElement>;
