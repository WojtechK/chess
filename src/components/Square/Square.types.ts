import { Piece } from "../../hooks/useFenNotation.types";
import { ColumnsType, RowsType } from "../Board/Board.types";
export type SquareColor = "light" | "dark";

export type SquareProps = {
  /**
   * mark for each row between 1 and 8
   */
  rowsMark?: RowsType;
  /**
   * mark for each column between a and h
   */
  colsMark?: ColumnsType;
  /**
   * is the square selected
   */
  isSelected?: boolean;
  /**
   * piece chess type
   */
  type: Piece | null;
  /**
   * square color
   */
  color: SquareColor;
} & React.HTMLAttributes<HTMLDivElement>;
