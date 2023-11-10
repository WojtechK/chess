import { SquareState } from "../../hooks/useFenNotation.types";
import { ColumnsType, RowsType } from "../Board/Board.types";

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
} & SquareState &
  React.HTMLAttributes<HTMLDivElement>;
