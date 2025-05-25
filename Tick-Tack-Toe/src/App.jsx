import { useState } from "react"
import { getRandomEmoji, checkWinner, canPlaceEmoji } from "./utils/gameLogic.js"
import CategorySelection from "./components/CategorySelection.jsx"
import GameScreen from "./components/GameScreen.jsx"
import HelpModal from "./components/HelpModal.jsx"

export default function EmojiTicTacToe() {
  const [gameState, setGameState] = useState("category-selection")
  const [selectedCategories, setSelectedCategories] = useState({})
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [playerEmojis, setPlayerEmojis] = useState({
    player1: [],
    player2: [],
  })
  const [winner, setWinner] = useState(null)
  const [showHelp, setShowHelp] = useState(false)
  const [winningLine, setWinningLine] = useState([])
  const [scores, setScores] = useState({ player1: 0, player2: 0 })

  const handleCategorySelect = (player, category) => {
    setSelectedCategories((prev) => ({ ...prev, [`player${player}`]: category }))
  }

  const handleStartGame = () => {
    setGameState("playing")
  }

  const handleCellClick = (index) => {
    if (board[index] || winner) return

    const playerKey = currentPlayer === 1 ? "player1" : "player2"
    const currentPlayerEmojis = playerEmojis[playerKey]

    // Check if move is valid
    if (!canPlaceEmoji(index, board, currentPlayerEmojis)) {
      return
    }

    const emoji = getRandomEmoji(currentPlayer, selectedCategories)
    const timestamp = Date.now()

    const newBoard = [...board]
    newBoard[index] = { emoji, player: currentPlayer, timestamp }

    const newPlayerEmojis = { ...playerEmojis }

    // If player already has 3 emojis, remove the oldest one
    if (currentPlayerEmojis.length === 3) {
      const oldestEmoji = currentPlayerEmojis[0]
      newBoard[oldestEmoji.position] = null
      newPlayerEmojis[playerKey] = [...currentPlayerEmojis.slice(1), { emoji, position: index, timestamp }]
    } else {
      newPlayerEmojis[playerKey] = [...currentPlayerEmojis, { emoji, position: index, timestamp }]
    }

    setBoard(newBoard)
    setPlayerEmojis(newPlayerEmojis)

    // Check for winner
    const result = checkWinner(newBoard)
    if (result) {
      setWinner(result.winner)
      setWinningLine(result.line)
      setGameState("game-over")
      setScores((prev) => ({
        ...prev,
        [`player${result.winner}`]: prev[`player${result.winner}`] + 1,
      }))
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer(1)
    setPlayerEmojis({ player1: [], player2: [] })
    setWinner(null)
    setWinningLine([])
    setGameState("playing")
  }

  const newGame = () => {
    setGameState("category-selection")
    setSelectedCategories({})
    setBoard(Array(9).fill(null))
    setCurrentPlayer(1)
    setPlayerEmojis({ player1: [], player2: [] })
    setWinner(null)
    setWinningLine([])
    setScores({ player1: 0, player2: 0 })
  }

  if (gameState === "category-selection") {
    return (
      <>
        <CategorySelection
          selectedCategories={selectedCategories}
          onCategorySelect={handleCategorySelect}
          onStartGame={handleStartGame}
          onShowHelp={() => setShowHelp(true)}
        />
        <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
      </>
    )
  }

  return (
    <>
      <GameScreen
        gameState={gameState}
        board={board}
        currentPlayer={currentPlayer}
        playerEmojis={playerEmojis}
        winner={winner}
        winningLine={winningLine}
        scores={scores}
        selectedCategories={selectedCategories}
        onCellClick={handleCellClick}
        onResetGame={resetGame}
        onNewGame={newGame}
        onShowHelp={() => setShowHelp(true)}
      />
      <HelpModal isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </>
  )
}
