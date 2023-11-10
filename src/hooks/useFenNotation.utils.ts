import { FenData } from "./useFenNotation.types";
import { ColumnsType, RowsType } from "../components/Board/Board.types";
import { SquareState } from "./useFenNotation.types";
import { Piece } from "./useFenNotation.types";
import { COLUMNS } from "../constants";

/**
 * Helper function to update fenData when a piece is moved
 */
export const getNewFenData = (
  fenData: FenData,
  selectedSquare: string,
  row: RowsType,
  colIndex: number,
) => {
  const [selectedRow, selectedCol] = selectedSquare;
  const selectedColIndex = COLUMNS.indexOf(selectedCol as ColumnsType);
  const selectedPiece =
    fenData.position[parseInt(selectedRow, 10) - 1][selectedColIndex];

  const newFenData = { ...fenData };
  newFenData.position[parseInt(selectedRow, 10) - 1][selectedColIndex] = null;
  newFenData.position[row - 1][colIndex] = selectedPiece;

  return newFenData;
};

/**
 * Helper function to check if clicked piece is same color as selected piece
 */
export const isSameColor = (
  fenData: FenData,
  selectedSquare: string,
  row: RowsType,
  colIndex: number,
) => {
  const [selectedRow, selectedCol] = selectedSquare;
  const selectedColIndex = COLUMNS.indexOf(selectedCol as ColumnsType);
  const selectedPiece =
    fenData.position[parseInt(selectedRow, 10) - 1][selectedColIndex];
  const clickedPiece = fenData.position[row - 1][colIndex];

  return selectedPiece?.color === clickedPiece?.color;
};

/**
 * Helper function to convert FEN notation string to board state
 */
export const fenToBoardState = (fen: string): FenData => {
  const parts = fen.split(" ");
  const rows = parts[0].split("/");
  const position = rows.map((row) => {
    const squares: SquareState[] = [];
    row.split("").forEach((char) => {
      if (isNaN(parseInt(char, 10))) {
        const color = char === char.toUpperCase() ? "w" : "b";
        squares.push({ type: char as Piece, color });
      } else {
        squares.push(...Array(parseInt(char, 10)).fill(null));
      }
    });
    return squares;
  });

  return {
    position,
  };
};

/**
 * Helper function to convert board state to FEN notation string
 */
export const boardStateToFen = (fenData: FenData) => {
  const position = fenData.position
    .map((row) => {
      return row.reduce((acc, square) => {
        if (square === null) {
          const lastChar = acc[acc.length - 1];
          if (isNaN(parseInt(lastChar, 10))) {
            return acc + "1";
          } else {
            return acc.slice(0, -1) + (parseInt(lastChar, 10) + 1);
          }
        } else {
          return acc + square.type;
        }
      }, "");
    })
    .join("/");

  return [position].join(" ");
};

/**
 * Helper function to check if a FEN notation string is valid
 * NOTE - this is simplified version of FEN notation validation, considering only position part in this app
 */
export const isValidFen = (fen: string) => {
  const fenParts = fen.split(" ");

  const [position] = fenParts;
  const rows = position.split("/");

  //check number of rows
  if (rows.length !== 8) return false;

  // check if any of the position characters isn't valid
  if (
    rows.some((row) =>
      row
        .split("")
        .some(
          (char) =>
            ![
              "k",
              "K",
              "q",
              "Q",
              "r",
              "R",
              "b",
              "B",
              "n",
              "N",
              "p",
              "P",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
            ].includes(char),
        ),
    )
  )
    return false;

  return true;
};
