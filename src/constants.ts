export const LOCAL_STORAGE_KEYS = {
  FEN_STRING: "fenString",
  FEN_DATA: "fenData",
};

export const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

export const ROWS_COLUMNS_COUNT = 8;
export const ROWS = Array.from({ length: ROWS_COLUMNS_COUNT }, (_, i) => i + 1);
export const COLUMNS = ["a", "b", "c", "d", "e", "f", "g", "h"];
