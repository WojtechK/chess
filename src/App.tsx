import "./App.scss";
import { Board } from "./components/Board/Board";
import { Textarea } from "./components/Textarea/Textarea";
import { useFenNotation } from "./hooks/useFenNotation";
import { Button } from "./components/Button/Button";
import { useState } from "react";
import { Card } from "./components/Card/Card";

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
      <main className="main-container">
          <Board
            boardState={fenData.position}
            selectedSquare={selectedSquare}
            onSquareClick={onSquareClick}
          />
      
        <div className="options">
          <Button variant="secondary" onClick={() => setIsFenOpen(!isFenOpen)}>
            Show FEN input
          </Button>
          {isFenOpen && (
            <Card style={{margin: "3rem 0"}}>
            <label htmlFor="fen-input">
                Enter FEN position:
              </label>
              <Textarea
                error={errorMessage}
                id="fen-input"
                rows={3}
                value={fenString}
                onChange={(e) => onFenInputChange(e.target.value)}
              />
              <Button style={{ margin: "1rem"}} onClick={resetGame}>Reset Board</Button>
            </Card> 
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
