import { COLUMNS, ROWS } from "../../constants";
import { Color } from "../../hooks/useFenNotation.types";
import { ColumnsType, RowsType } from "./Board.types";

// if it's first Board column, display row mark (1-8)
const getRowsMark = (col: ColumnsType, row: RowsType) => {
  if (col === COLUMNS[0]) {
    return row;
  }
};

// if it's last Board row, display column mark (a-h)
const getColsMark = (row: RowsType, col: ColumnsType) => {
  if (row === ROWS[ROWS.length - 1]) {
    return col;
  }
};

// if row + column is even, display white square, else display black square
const getSquareColor = (row: RowsType, colIndex: number): Color => {
  if ((row + colIndex) % 2 === 0) {
    return "w";
  } else {
    return "b";
  }
};

export { getRowsMark, getColsMark, getSquareColor };
