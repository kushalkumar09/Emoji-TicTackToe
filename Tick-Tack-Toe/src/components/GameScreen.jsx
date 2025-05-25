import ScoreBoard from "./ScoreBoard.jsx"
import PlayerStatus from "./PlayerStatus.jsx"
import GameBoard from "./GameBoard.jsx"
import EmojiCounter from "./EmojiCounter.jsx"
import GameControls from "./GameControls.jsx"

export default function GameScreen({
  gameState,
  board,
  currentPlayer,
  playerEmojis,
  winner,
  winningLine,
  scores,
  selectedCategories,
  onCellClick,
  onResetGame,
  onNewGame,
  onShowHelp,
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-4 animate-game-enter">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 animate-title-bounce">Emoji Tic Tac Toe</h1>

          {/* Scores */}
          <ScoreBoard scores={scores} selectedCategories={selectedCategories} />

          {/* Current Turn / Winner */}
          <PlayerStatus gameState={gameState} currentPlayer={currentPlayer} winner={winner} />
        </div>

        {/* Game Board */}
        <GameBoard board={board} winningLine={winningLine} onCellClick={onCellClick} disabled={!!winner} />

        {/* Player Emoji Counts */}
        <EmojiCounter playerEmojis={playerEmojis} />

        {/* Controls */}
        <GameControls onResetGame={onResetGame} onNewGame={onNewGame} onShowHelp={onShowHelp} />
      </div>

      <style jsx>{`
        @keyframes game-enter {
          from { 
            transform: scale(0.95); 
            opacity: 0; 
          }
          to { 
            transform: scale(1); 
            opacity: 1; 
          }
        }
        
        @keyframes title-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-game-enter { animation: game-enter 0.6s ease-out; }
        .animate-title-bounce { animation: title-bounce 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
