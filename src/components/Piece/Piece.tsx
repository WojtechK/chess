import { memo } from "react";
import { PieceProps, PieceSvgProps } from "./Piece.types";

export const Piece: React.FC<PieceProps> = memo(({ type, color }) => {
  const PiecesMap = {
    k: <King color={color} />,
    q: <Queen color={color} />,
    b: <Bishop color={color} />,
    n: <Knight color={color} />,
    r: <Rook color={color} />,
    p: <Pawn color={color} />,
  };

  return <span>{type}</span>;
});

const King = ({ color }: PieceSvgProps) => (
  <svg viewBox="0 0 45 45" fill={color}>
    <path
      d="M 22.5,11.63 L 22.5,6"
      stroke="#000"
      strokeWidth="2.5"
      strokeLinejoin="miter"
    />
    <path
      d="M 20,8 L 25,8"
      stroke="#000"
      strokeWidth="2.5"
      strokeLinejoin="miter"
    />
    <path d="M 22.5,25 L 22.5,30" strokeLinecap="butt" stroke="#000" />
    <path
      d="M 12.5,37 C 12.5,40 20,42 22.5,42 C 25,42 32.5,40 32.5,37"
      strokeLinecap="butt"
      stroke="#000"
    />
    <path
      d="M 12.5,30 C 12.5,33.5 20,34.5 22.5,34.5 C 25,34.5 32.5,33.5 32.5,30"
      strokeLinecap="butt"
      stroke="#000"
    />
    <path d="M 12.5,33.5 L 32.5,33.5" strokeLinecap="butt" stroke="#000" />
    <path d="M 12.5,37 L 32.5,37" strokeLinecap="butt" stroke="#000" />
    <path
      d="M 22.5,30 C 25,29 27.5,28 30,25 C 30,22.5 22.5,22.5 22.5,22.5 C 22.5,22.5 15,22.5 15,25 C 17.5,28 20,29 22.5,30"
      strokeLinecap="butt"
      stroke="#000"
    />
    <path d="M 20,8 L 25,8" strokeLinecap="butt" stroke="#000" />
    <path d="M 32,11.5 L 32,14" strokeLinecap="butt" />
    <path d="M 13,11.5 L 13,14" strokeLinecap="butt" />
    <path
      d="M 14,35.5 L 31,35.5"
      strokeLinecap="butt"
      strokeWidth="1"
      stroke="#000"
    />
    <path
      d="M 14,14 L 31,14"
      strokeLinecap="butt"
      strokeWidth="1"
      stroke="#000"
    />
  </svg>
);

const Queen = ({ color }: PieceSvgProps) => (
  <svg viewBox="0 0 45 45" fill={color}>
    <g strokeWidth="1.5" strokeLinecap="round">
      <circle cx="6" cy="12" r="2.75" />
      <circle cx="14" cy="9" r="2.75" />
      <circle cx="22.5" cy="8" r="2.75" />
      <circle cx="31" cy="9" r="2.75" />
      <circle cx="39" cy="12" r="2.75" />
      <path
        d="M 9,26 C 17.5,24.5 27.5,24.5 36,26 L 31,17 L 14,17 L 9,26"
        strokeLinecap="butt"
      />
      <path d="M 9,26 L 14,29.5 L 14,14" strokeLinecap="butt" />
      <path d="M 36,26 L 31,29.5 L 31,14" strokeLinecap="butt" />
      <path d="M 11,38.5 A 35,35 1 0 0 34,38.5" strokeLinecap="butt" />
      <path d="M 11,29 A 35,35 1 0 1 34,29" strokeLinecap="butt" />
      <path d="M 12.5,31.5 L 32.5,31.5" strokeLinecap="butt" />
      <path d="M 11,38.5 L 34,38.5" strokeLinecap="butt" />
      <path d="M 11,29 L 34,29" strokeLinecap="butt" />
    </g>
  </svg>
);

const Bishop2 = ({ color }: PieceSvgProps) => (
  <svg viewBox="0 0 45 45" fill={color}>
    <g strokeWidth="1.5" strokeLinecap="round">
      <g strokeLinecap="butt">
        <path d="M 9,36 C 12.5,32 15,29 22.5,29 C 30,29 32.5,32 36,36" />
        <path d="M 15,32 C 17.5,30.5 20,30 22.5,30 C 25,30 27.5,30.5 30,32" />
        <path d="M 25,32 C 25,29.5 22.5,29.5 22.5,29.5 C 22.5,29.5 20,29.5 20,32" />
        <path d="M 14,37.5 L 31,37.5" strokeWidth="1" />
      </g>
      <path d="M 11,14 L 34,14" />
      <path d="M 34,14 L 31,17" />
      <path d="M 14,17 L 11,14" />
      <path d="M 11,14 L 11,17" />
      <path d="M 34,14 L 34,17" />
      <path d="M 11,17 C 11.5,18.5 14,19.5 14,19.5" />
      <path d="M 14,19.5 L 14,21.5" />
      <path d="M 14,21.5 L 31,21.5" />
      <path d="M 31,21.5 L 31,19.5" />
      <path d="M 31,19.5 C 33.5,19.5 36,18.5 36,17" />
      <path d="M 22.5,11 L 22.5,13" />
      <circle cx="22.5" cy="8" r="2.5" />
    </g>
  </svg>
);

export const Bishop = ({ color }: PieceSvgProps) => (
  <svg viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
    <g
      fill="none"
      fillRule="evenodd"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g fill={color} strokeLinecap="butt">
        <path d="M 9,36 C 12.5,32 15,29 22.5,29 C 30,29 32.5,32 36,36" />
        <path d="M 15,32 C 17.5,30.5 20,30 22.5,30 C 25,30 27.5,30.5 30,32" />
        <path d="M 25,32 C 25,29.5 22.5,29.5 22.5,29.5 C 22.5,29.5 20,29.5 20,32" />
        <path d="M 14,37.5 L 31,37.5" strokeWidth="1" />
      </g>
      <path d="M 11,14 L 34,14" />
      <path d="M 34,14 L 31,17" />
      <path d="M 11,17 L 11,14" />
      <path d="M 34,14 L 34,17" />
      <path d="M 11,17 C 11.5,18.5 14,19.5 14,19.5" />
      <path d="M 14,19.5 L 14,21.5" />
      <path d="M 14,21.5 L 31,21.5" />
      <path d="M 31,21.5 L 31,19.5" />
      <path d="M 31,19.5 C 33.5,19.5 36,18.5 36,17" />
      <path d="M 11,17 C 8.5,17 6,18.5 6,21.5 L 6,22 C 6,25 10,23.5 10,26.5" />
      <path d="M 10,26.5 L 10,29.5" />
      <path d="M 10,29.5 C 10,29.5 10,29.5 10.5,30" />
      <path d="M 10.5,30 C 10.5,30 10.5,30 10.5,29.5" />
      <path d="M 10.5,29.5 L 10.5,30.5" />
      <path d="M 10.5,30.5 C 14.5,30.5 15.5,29 15.5,29" />
      <path d="M 15.5,29 L 15.5,29.5" />
      <path d="M 15.5,29.5 L 15.5,31.5" />
      <path d="M 15.5,31.5 L 14,31.5" />
      <path d="M 14,31.5 L 14,29.5" />
      <path d="M 14,29.5 C 14,29.5 13,29 10.5,30.5" />
      <path d="M 10.5,30.5 L 10,30" />
      <path d="M 10,30 C 10,30 9.5,29.5 10,29.5" />
      <path d="M 10,29.5 L 10,26.5" />
      <path d="M 10,26.5 C 9.5,24 6,24.5 6,22" />
      <path d="M 6,22 L 6,21.5" />
      <path d="M 6,21.5 C 6,18.5 8.5,17 11,17" />
      <path d="M 30,14.5 L 30,14" />
      <path d="M 15,14 C 15,14 15,14.5 14.5,14.5" />
      <path d="M 14.5,14.5 L 14.5,14" />
      <path d="M 14.5,14 L 15,14" />
      <path d="M 30,14 C 30,14 30,14.5 30.5,14.5" />
      <path d="M 30.5,14.5 L 30.5,14" />
      <path d="M 30.5,14 L 30,14" />
      <path d="M 25,8 L 25,9" />
      <path d="M 20,8 L 20,9" />
      <path d="M 32,5.5 L 12,5.5" />
      <path d="M 11,14 L 34,14" strokeWidth="1" />
    </g>
  </svg>
);

const Knight = ({ color }: PieceSvgProps) => (
  <svg viewBox="0 0 45 45" fill={color}>
    <g strokeWidth="1.5" strokeLinecap="round">
      <path d="M 22,10 C 31,11 34,14 34,14" strokeLinejoin="miter" />
      <path d="M 20,16 L 32,16" strokeLinejoin="miter" />
      <path
        d="M 32,16 C 32,16 32,16.5 31,17 C 31.031,17.406 29.672,19.672 28,21 C 27.5,21.5 27,22 27,22"
        strokeLinejoin="miter"
      />
      <path
        d="M 27,22 C 27,22 26,22.5 25,21 C 24,19.5 23.5,18.5 22,18 L 21,19 L 20,19"
        strokeLinejoin="miter"
      />
      <path
        d="M 20,19 C 20,19 14,20.5 14,26 C 14,26 14,29.5 14,29.5 C 14,29.5 13.5,30 14,32"
        strokeLinejoin="miter"
      />
      <path d="M 14,32 L 19,32" strokeLinejoin="miter" />
      <path
        d="M 19,32 C 19,32 19.937,31.688 21,30 C 22.063,28.312 22,27 22,27"
        strokeLinejoin="miter"
      />
      <path d="M 22,27 L 24,24 L 23,19" strokeLinejoin="miter" />
      <path d="M 24,24 L 28,24" strokeLinejoin="miter" />
      <path
        d="M 24,19 C 24,19 24,18.5 23,18 C 23,18 23,17.5 22,17 C 22,17 20,16 20,16"
        strokeLinejoin="miter"
      />
      <path
        d="M 20,16 C 20,16 18,16.5 16,18 C 15.406,18.281 14.406,18.406 13.5,18.5"
        strokeLinejoin="miter"
      />
      <path
        d="M 13.5,18.5 L 14,20 C 14,20 14,21.5 14.5,21 C 15,20.5 16,19 16,19"
        strokeLinejoin="miter"
      />
      <path d="M 16,19 L 18.5,21.5" strokeLinejoin="miter" />
      <path d="M 18.5,21.5 C 18.5,21.5 19,21.5 20,19" strokeLinejoin="miter" />
      <path d="M 20,19 L 22,17" strokeLinejoin="miter" />
      <path
        d="M 9,36 C 12,32 16,29 22.5,29"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      <path
        d="M 22.5,29 C 29,29 33,32 36,36"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      <path d="M 9,36 L 36,36" strokeLinecap="butt" strokeLinejoin="miter" />
    </g>
  </svg>
);

const Rook = ({ color }: PieceSvgProps) => (
  <svg viewBox="0 0 45 45" fill={color}>
    <g strokeWidth="1.5" strokeLinecap="round">
      <path d="M 22.5,11 L 22.5,6" strokeLinejoin="miter" />
      <path d="M 20,8 L 25,8" strokeLinejoin="miter" />
      <path d="M 12.5,11 L 32.5,11" strokeLinejoin="miter" />
      <path d="M 12.5,20 L 32.5,20" strokeLinejoin="miter" />
      <path d="M 12.5,25 L 32.5,25" strokeLinejoin="miter" />
      <path d="M 12.5,30 L 32.5,30" strokeLinejoin="miter" />
      <path d="M 17.5,25 L 27.5,25" strokeLinejoin="miter" />
      <path d="M 22.5,30 L 22.5,33.5" strokeLinejoin="miter" />
      <path d="M 12.5,37 L 32.5,37" strokeLinejoin="miter" />
      <path d="M 12.5,40 L 32.5,40" strokeLinejoin="miter" />
      <path d="M 20,36 L 25,36" strokeLinejoin="miter" />
      <path d="M 22.5,11 L 22.5,6" strokeLinejoin="miter" />
      <path d="M 20,8 L 25,8" strokeLinejoin="miter" />
      <path d="M 25,36 L 25,32" strokeLinejoin="miter" />
      <path d="M 20,36 L 20,32" strokeLinejoin="miter" />
      <path d="M 32,11 L 32,14" strokeLinejoin="miter" />
      <path d="M 13,11 L 13,14" strokeLinejoin="miter" />
    </g>
  </svg>
);

const Pawn = ({ color }: PieceSvgProps) => (
  <svg viewBox="0 0 45 45" fill={color}>
    <path d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,14.59 19.13,16.45 21,17 L 21,30 L 24,30 L 24,17 C 25.87,16.45 27,14.59 27,13 C 27,10.79 25.21,9 23,9 z " />
  </svg>
);
