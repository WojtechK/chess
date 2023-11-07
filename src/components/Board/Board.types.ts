export const ROWS_COLUMNS_COUNT = 8;
export const ROWS = Array.from({ length: ROWS_COLUMNS_COUNT }, (_, i) => i + 1);
export const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];

export type ColumnsType = (typeof COLUMNS)[number];
export type RowsType = (typeof ROWS)[number];

export type BoardProps = {
  /**
   * current FEN notation state of the board
   */
  fen?: string;
  /**
   * Array of moves history in FEN notation
   */
  moves?: string[];
};