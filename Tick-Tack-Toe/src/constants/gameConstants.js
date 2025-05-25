export const EMOJI_CATEGORIES = {
  animals: {
    name: "Animals",
    emojis: ["🐶", "🐱", "🐵", "🐰", "🦊", "🐻"],
    color: "bg-orange-100 border-orange-300",
  },
  food: {
    name: "Food",
    emojis: ["🍕", "🍟", "🍔", "🍩", "🍎", "🍌"],
    color: "bg-red-100 border-red-300",
  },
  sports: {
    name: "Sports",
    emojis: ["⚽️", "🏀", "🏈", "🎾", "🏐", "🏓"],
    color: "bg-blue-100 border-blue-300",
  },
  nature: {
    name: "Nature",
    emojis: ["🌸", "🌺", "🌻", "🌷", "🌹", "🌼"],
    color: "bg-green-100 border-green-300",
  },
  space: {
    name: "Space",
    emojis: ["🌟", "⭐", "🌙", "☀️", "🪐", "🌍"],
    color: "bg-purple-100 border-purple-300",
  },
}

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // columns
  [0, 4, 8],
  [2, 4, 6], // diagonals
]
