import "./App.scss";
import { Board } from "./components/Board/Board";
import { Textarea } from "./components/Textarea/Textarea";
import { useFenNotation } from "./hooks/useFenNotation";
import { Button } from "./components/Button/Button";
import { useState } from "react";

function App() {
  const {
    fenString,
    onFenInputChange,
    fenData,
    resetGame,
    errorMessage,
    onSquareClick,
    selectedSquare,
  } = useFenNotation();

  const [isFenOpen, setIsFenOpen] = useState(false);
  return (
    <div className="app">
      <header>
        <h1>Chessboard</h1>
      </header>
      <main className="main-game-container">
        <div className="board-container">
          <Board
            boardState={fenData.position}
            selectedSquare={selectedSquare}
            onSquareClick={onSquareClick}
          />
        </div>
        <div className="fen-input-container">
          <Button variant="secondary" onClick={() => setIsFenOpen(!isFenOpen)}>
            Show FEN input
          </Button>
          {isFenOpen && (
            <>
              <label htmlFor="fen-input">
                Enter a valid FEN notation (including all FEN sections):
              </label>
              <Textarea
                error={errorMessage}
                id="fen-input"
                rows={3}
                value={fenString}
                onChange={(e) => onFenInputChange(e.target.value)}
              />
              <Button onClick={resetGame}>Reset Board</Button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
