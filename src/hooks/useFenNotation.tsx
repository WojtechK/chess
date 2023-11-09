import { useState, useCallback } from "react";
import {
  FenData,
  SquareState,
  useFenNotationType,
} from "./useFenNotation.types";
import {
  ColumnsType,
  RowsType,
} from "../components/Board/Board.types";
import { boardStateToFen, fenToBoardState, getNewFenData, isValidFen, getNewToggledSelectedSquare } from "./useFenNotation.utils";

export const INITIAL_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";

/**
 * Custom hook to handle FEN notation and board state conversion
 */
export const useFenNotation: useFenNotationType = () => {
  const [fenString, setFenString] = useState(INITIAL_FEN);
  const [fenData, setFenData] = useState<FenData>(fenToBoardState(INITIAL_FEN));
  const [hasFenError, setHasFenError] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState<string | undefined>("");

  const errorMessage = hasFenError
    ? "Please enter a valid FEN notation to update the board"
    : undefined;

  const onFenInputChange = useCallback((newFen: string) => {
    setFenString(newFen);
    if (!isValidFen(newFen)) {
      setHasFenError(true);
    } else {
      setHasFenError(false);
      setFenData(fenToBoardState(newFen));
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

      // CASE 1 - if new piece is selected, update selectedSquare state
      if (clickedPiece && !selectedSquare) {
        setSelectedSquare(clickedSquareId);
      }

      // CASE 2 - if the piece is already selected and there's no piece on clicked square, move the piece
      else if (!clickedPiece && selectedSquare) {
        const newFenData = getNewFenData(
          fenData,
          selectedSquare,
          row,
          colIndex
        );
        setFenData(newFenData);
        setFenString(boardStateToFen(newFenData));
        setSelectedSquare(undefined);
      }

      //CASE 3 - if the piece is already selected and clicked on piece of same color to toggle between pieces
      if (clickedPiece && selectedSquare) {
        const newSelectedSquare = getNewToggledSelectedSquare(
          fenData,
          selectedSquare,
          row,
          colIndex
        );
        setSelectedSquare(newSelectedSquare);
      }

      //CASE 4 - if the piece is already selected and clicked on piece of different color, attack the piece
      if (clickedPiece && selectedSquare) {
        const newFenData = getNewFenData(
          fenData,
          selectedSquare,
          row,
          colIndex
        );
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
