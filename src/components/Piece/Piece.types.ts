export type PieceType = "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";

export type PieceProps = {
    /**
     * color of the piece
     */
    color: "white" | "black";
    /**
     * type of the piece
     */
    type: PieceType;
    };

    export type PieceSvgProps = Pick<PieceProps, "color">