import { useState, useCallback } from "react";
import {
  Color,
  FenData,
  Piece,
  SquareState,
  useFenNotationType,
} from "./useFenNotation.types";
import {
  COLUMNS,
  ColumnsType,
  RowsType,
} from "../components/Board/Board.types";

export const INITIAL_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR b KQkq e3 0 1";

/**
 * Custom hook to handle FEN notation and board state conversion
 */
export const useFenNotation: useFenNotationType = () => {
  const [fenString, setFenString] = useState(INITIAL_FEN);
  const [fenData, setFenData] = useState<FenData>(fenToBoardState(INITIAL_FEN));
  const [hasFenError, setHasFenError] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState<string | undefined>("");

  const errorMessage = hasFenError
    ? "Invalid FEN notation. Provide correct notation to update the Chessboard"
    : undefined;

  const onFenInputChange = useCallback((newFen: string) => {
    if (isValidFen(newFen)) {
      setFenString(newFen);
      setFenData(fenToBoardState(newFen));
      setHasFenError(false);
    } else {
      setHasFenError(true);
    }
  }, []);

  const onSquareClick = useCallback(
    (
      row: RowsType,
      col: ColumnsType,
      colIndex: number,
      clickedPiece?: SquareState
    ) => {
      const clickedSquareId = `${row}${col}`;
      // if new piece is selected, update selectedSquare
      if (clickedPiece && !selectedSquare) {
        setSelectedSquare(clickedSquareId);
      }
      // if same piece is already selected, deselect
      else if (clickedPiece && selectedSquare) {
        setSelectedSquare(undefined);
      }
      // if some square is selected and there's no piece on clicked square, move the piece
      else if (!clickedPiece && selectedSquare) {
        const newFenData = getNewFenData(
          fenData,
          selectedSquare,
          row,
          colIndex
        );
        console.log(newFenData);
        setFenData(newFenData);
        setFenString(boardStateToFen(newFenData));
        setSelectedSquare(undefined);
      }
    },
    [fenData, selectedSquare]
  );

  const resetGame = useCallback(() => {
    setFenString(INITIAL_FEN);
    setFenData(fenToBoardState(INITIAL_FEN));
    setHasFenError(false);
  }, []);

  return {
    fenData,
    fenString,
    onFenInputChange,
    hasFenError,
    resetGame,
    errorMessage,
    onSquareClick,
    selectedSquare,
  };
};

/**
 * Helper function to update fenData when a piece is moved
 */
const getNewFenData = (
  fenData: FenData,
  selectedSquare: string,
  row: RowsType,
  colIndex: number
) => {
  const [selectedRow, selectedCol] = selectedSquare;
  const selectedColIndex = COLUMNS.indexOf(selectedCol as ColumnsType);
  console.log(fenData.position);
  const selectedPiece =
    fenData.position[parseInt(selectedRow, 10) - 1][selectedColIndex];

  const newFenData = { ...fenData };
  newFenData.position[parseInt(selectedRow, 10) - 1][selectedColIndex] = null;
  newFenData.position[row - 1][colIndex] = selectedPiece;

  return newFenData;
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

  const activeColor = parts[1] as Color;
  const castlingAvailability = parts[2];
  const enPassantTarget = parts[3];
  const halfmoveClock = parseInt(parts[4], 10);
  const fullmoveNumber = parseInt(parts[5], 10);

  return {
    position,
    activeColor,
    castlingAvailability,
    enPassantTarget,
    halfmoveClock,
    fullmoveNumber,
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

  return [
    position,
    fenData.activeColor,
    fenData.castlingAvailability,
    fenData.enPassantTarget,
    fenData.halfmoveClock.toString(),
    fenData.fullmoveNumber.toString(),
  ].join(" ");
};

/**
 * Helper function to check if a FEN notation string is valid
 */
export const isValidFen = (fen: string) => {
  const parts = fen.split(" ");
  if (parts.length !== 6) return false;

  // NOTE - this is simplified version of FEN notation validation, considering only position part in this app
  const [position] = parts;
  const rows = position.split("/");
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
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
            ].includes(char)
        )
    )
  )
    return false;

  // check if there are 8 pieces per row
  if (
    ["k", "K", "q", "Q", "r", "R", "b", "B", "n", "N", "p", "P"].some(
      (char) => position.split("").filter((c) => c === char).length > 8
    )
  )
    return false;

  return true;
};
