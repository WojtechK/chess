import { useState, useCallback } from "react";
import {
  FenData,
  SquareState,
  useFenNotationType,
} from "./useFenNotation.types";
import { ColumnsType, RowsType } from "../components/Board/Board.types";
import {
  boardStateToFen,
  fenToBoardState,
  getNewFenData,
  isValidFen,
  isSameColor,
} from "./useFenNotation.utils";
import { useLocalStorage } from "./useLocalStorage";
import { INITIAL_FEN, LOCAL_STORAGE_KEYS } from "../constants";

export const useFenNotation: useFenNotationType = () => {
  const [fenString, setFenString] = useLocalStorage<string>(
    LOCAL_STORAGE_KEYS.FEN_STRING,
    INITIAL_FEN,
  );
  const [fenData, setFenData] = useLocalStorage<FenData>(
    LOCAL_STORAGE_KEYS.FEN_DATA,
    fenToBoardState(INITIAL_FEN),
  );
  console.log(fenData);
  const [hasFenError, setHasFenError] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState<string | undefined>();

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

  const updateFenData = useCallback(
    (row: RowsType, colIndex: number, selectedSquare: string) => {
      const newFenData = getNewFenData(fenData, selectedSquare, row, colIndex);
      setFenData(newFenData);
      setFenString(boardStateToFen(newFenData));
      setSelectedSquare(undefined);
    },
    [fenData],
  );

  const onSquareClick = useCallback(
    (
      row: RowsType,
      col: ColumnsType,
      colIndex: number,
      clickedPiece?: SquareState,
    ) => {
      const clickedSquareId = `${row}${col}`;

      // CASE 1 - if new piece is selected, update selectedSquare state
      if (clickedPiece && !selectedSquare) {
        setSelectedSquare(clickedSquareId);
      }

      // CASE 2 - if the piece is already selected and there's no piece on clicked square, move the piece
      else if (!clickedPiece && selectedSquare) {
        updateFenData(row, colIndex, selectedSquare);
      }

      //CASE 3 - if the piece is already selected and clicked on other piece detect color, then toggle or attack
      else if (clickedPiece && selectedSquare) {
        const isClickedPieceSameColor = isSameColor(
          fenData,
          selectedSquare,
          row,
          colIndex,
        );

        if (isClickedPieceSameColor) {
          setSelectedSquare(clickedSquareId);
        } else {
          updateFenData(row, colIndex, selectedSquare);
        }
      }
    },
    [fenData, selectedSquare, updateFenData],
  );

  const resetGame = useCallback(() => {
    setFenString(INITIAL_FEN);
    setFenData(fenToBoardState(INITIAL_FEN));
    setSelectedSquare(undefined);
    setHasFenError(false);
  }, [setFenData, setFenString]);

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
