import { BoardProps } from "../components/Board/Board.types";

export type Piece = "p" | "n" | "b" | "r" | "q" | "k";
export type Color = "w" | "b";
export type PieceWithColor = `${Piece}${Color}`;
export type SquareState = { type: Piece; color: Color } | null;
export type BoardState = SquareState[][];

export interface FenData {
  position: BoardState;
  // maybe add more FEN parts as future improvements
}

export type useFenNotationType = () => {
  fenData: FenData;
  fenString: string;
  onFenInputChange: (newFen: string) => void;
  hasFenError: boolean;
  resetGame: () => void;
  errorMessage?: string;
  selectedSquare?: string;
} & Pick<BoardProps, "onSquareClick">;
