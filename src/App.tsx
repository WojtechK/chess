import './App.scss'
import { Board } from './components/Board/Board'


/**
 * CHESS GAME
 * 1. support FEN notation as input and output
 * 2. support suport manual input of moves
 */
function App() {

  return (
    <div className="app">
      <main>
        <Board fen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" />
      </main>

  </div>
  )
}

export default App
