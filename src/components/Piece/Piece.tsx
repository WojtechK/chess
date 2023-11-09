import { memo } from "react";
import { PieceProps } from "./Piece.types";
import bishopDark from "../../assets/bishop-d.svg";
import bishopWhite from "../../assets/bishop-w.svg";
import kingDark from "../../assets/king-d.svg";
import kingWhite from "../../assets/king-w.svg";
import knightDark from "../../assets/knight-d.svg";
import knightWhite from "../../assets/knight-w.svg";
import pawnDark from "../../assets/pawn-d.svg";
import pawnWhite from "../../assets/pawn-w.svg";
import queenDark from "../../assets/queen-d.svg";
import queenWhite from "../../assets/queen-w.svg";
import rookDark from "../../assets/rook-d.svg";
import rookWhite from "../../assets/rook-w.svg";

import "./Piece.scss";

export const Piece: React.FC<PieceProps> = memo(({ type, color }) => {
  const typeLowercase = type.toLowerCase();
  const getPiece = (type: string, color: string) => {
    switch (type) {
      case "b":
        return color === "w" ? bishopWhite : bishopDark;
      case "k":
        return color === "w" ? kingWhite : kingDark;
      case "n":
        return color === "w" ? knightWhite : knightDark;
      case "p":
        return color === "w" ? pawnWhite : pawnDark;
      case "q":
        return color === "w" ? queenWhite : queenDark;
      case "r":
        return color === "w" ? rookWhite : rookDark;
      default:
        return "";
    }
  };
  
  return (
    <img src={getPiece(typeLowercase, color)} alt={type} className="piece__img" />
  )

});