import { EMOJI_CATEGORIES, WINNING_LINES } from "../constants/gameConstants.js"

export const getRandomEmoji = (player, selectedCategories) => {
  const categoryKey = player === 1 ? selectedCategories.player1 : selectedCategories.player2
  if (!categoryKey) return ""
  const category = EMOJI_CATEGORIES[categoryKey]
  return category.emojis[Math.floor(Math.random() * category.emojis.length)]
}

export const checkWinner = (board) => {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line
    if (
      board[a] &&
      board[b] &&
      board[c] &&
      board[a].player === board[b].player &&
      board[a].player === board[c].player
    ) {
      return { winner: board[a].player, line }
    }
  }
  return null
}

export const canPlaceEmoji = (index, board, playerEmojis) => {
  // Cell must be empty
  if (board[index]) return false

  // If player has 3 emojis, check if trying to place where oldest was
  if (playerEmojis.length === 3) {
    const oldestPosition = playerEmojis[0].position
    if (index === oldestPosition) return false
  }

  return true
}
