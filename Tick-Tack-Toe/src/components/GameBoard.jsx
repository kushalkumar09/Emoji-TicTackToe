"use client"

import GameCell from "./GameCell.jsx"

export default function GameBoard({ board, winningLine, onCellClick, disabled }) {
  return (
    <div className="flex justify-center mb-6 animate-board-appear">
      <div className="grid grid-cols-3 gap-2 p-4 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl">
        {board.map((cell, index) => (
          <GameCell
            key={index}
            cell={cell}
            index={index}
            isWinningCell={winningLine.includes(index)}
            onClick={onCellClick}
            disabled={disabled || !!cell}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes board-appear {
          from { 
            transform: scale(0.8) translateY(20px); 
            opacity: 0; 
          }
          to { 
            transform: scale(1) translateY(0); 
            opacity: 1; 
          }
        }
        
        .animate-board-appear { animation: board-appear 0.6s ease-out; }
      `}</style>
    </div>
  )
}
