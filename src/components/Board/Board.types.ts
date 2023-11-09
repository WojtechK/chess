import { COLUMNS, ROWS } from "../../constants";
import { BoardState, SquareState } from "../../hooks/useFenNotation.types";

export type ColumnsType = (typeof COLUMNS)[number];
export type RowsType = (typeof ROWS)[number];

export type BoardProps = {
  /**
   * current FEN notation state of the board
   */
  boardState: BoardState;
  /**
   * active square
   */
  selectedSquare?: string;
  /**
   * callback function to handle square click
   */
  onSquareClick: (
    row: RowsType,
    col: ColumnsType,
    colIndex: number,
    piece?: SquareState,
  ) => void;
};
