I've created a complete twisted Tic Tac Toe game! Here's what I've implemented:

## 🎮 Key Features

**Core Game Mechanics:**

- 3x3 grid with maximum 6 active emojis (3 per player)
- FIFO vanishing rule - oldest emoji disappears when placing 4th
- Restriction: 4th emoji cannot be placed where 1st emoji was
- Random emoji selection from chosen categories
- Win detection for horizontal, vertical, and diagonal lines


**UI/UX Features:**

- Category selection screen with 5 emoji categories (Animals, Food, Sports, Nature, Space)
- Turn indication and player status
- Visual emoji counters showing active emojis per player
- Score tracking across multiple rounds
- Winning line highlighting
- Comprehensive help modal
- Responsive design for desktop and mobile


**Categories Included:**

- 🐶 Animals: Dogs, cats, monkeys, rabbits, foxes, bears
- 🍕 Food: Pizza, fries, burgers, donuts, apples, bananas
- ⚽ Sports: Soccer, basketball, football, tennis, volleyball, ping pong
- 🌸 Nature: Various flowers and plants
- 🌟 Space: Stars, planets, sun, moon, earth


## 🎨 Design Highlights

- **Gradient backgrounds** for visual appeal
- **Color-coded players** (blue vs red)
- **Smooth animations** and hover effects
- **Card-based layout** for clean organization
- **Badge components** for status indicators
- **Responsive grid** that works on all devices


## 🔧 Technical Implementation

- **React hooks** for state management (useState, useEffect)
- **TypeScript** for type safety
- **Modular component structure**
- **Clean separation** of game logic and UI
- **Efficient win detection** algorithm
- **FIFO queue management** for emoji tracking


The game is fully functional and includes all the bonus features like category selection, animations, winning combination highlighting, and score tracking.

Here is Live Website Demo Link :- https://emoji-tic-tack-toe.vercel.app/