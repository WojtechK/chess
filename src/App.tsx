import "./App.scss";
import { Board } from "./components/Board/Board";
import { Textarea } from "./components/Textarea/Textarea";
import { useFenNotation } from "./hooks/useFenNotation";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";

const App = () => {
  const {
    fenString,
    onFenInputChange,
    fenData,
    resetGame,
    errorMessage,
    onSquareClick,
    selectedSquare,
  } = useFenNotation();

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
        <section className="options">
          <Card>
            <label className="fen-input-label" htmlFor="fen-input">
              Enter FEN position:
            </label>
            <Textarea
              id="fen-input"
              error={errorMessage}
              rows={3}
              value={fenString}
              onChange={(e) => onFenInputChange(e.target.value)}
            />
            <Button onClick={resetGame}>Reset Board</Button>
          </Card>
          <Card>
            <h2>Documentation</h2>
            <ul className="documentation-list">
              <li>
                This is simplified version of Chess game. The pieces can be
                moved wherever and without any rules or order.
              </li>
              <li>
                Pieces can attack opposite color and the attacked piece is
                removed from the board.
              </li>
              <li>Pieces within the same team can be toggled when selected.</li>
              <li>
                <strong>FEN notation</strong> is simplified to include only part
                of the notation responsible for position.
              </li>
              <li>
                <strong>FEN notation</strong> is updated on every move or by
                entering it manually in the textarea.
              </li>
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default App;
