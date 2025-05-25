"use client"

import { useState, useEffect } from "react"

export default function GameCell({ cell, index, isWinningCell, onClick, disabled }) {
  const [isNew, setIsNew] = useState(false)
  const [isVanishing, setIsVanishing] = useState(false)

  useEffect(() => {
    if (cell) {
      setIsNew(true)
      const timer = setTimeout(() => setIsNew(false), 600)
      return () => clearTimeout(timer)
    }
  }, [cell])

  const handleClick = () => {
    if (!disabled && !cell) {
      onClick(index)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`
        w-20 h-20 md:w-24 md:h-24 border-2 border-gray-300 rounded-lg
        flex items-center justify-center text-3xl md:text-4xl
        transition-all duration-300 transform
        ${isWinningCell ? "animate-winning-cell bg-yellow-200 border-yellow-400" : ""}
        ${cell ? "cursor-default" : "cursor-pointer hover:scale-105 hover:bg-gray-50 hover:shadow-md"}
        ${isNew ? "animate-emoji-appear" : ""}
        ${isVanishing ? "animate-emoji-vanish" : ""}
      `}
      disabled={disabled}
    >
      <span className={`${cell ? "animate-emoji-bounce" : ""}`}>{cell?.emoji}</span>

      <style jsx>{`
        @keyframes emoji-appear {
          0% { 
            transform: scale(0) rotate(180deg); 
            opacity: 0; 
          }
          50% { 
            transform: scale(1.3) rotate(90deg); 
            opacity: 0.8; 
          }
          100% { 
            transform: scale(1) rotate(0deg); 
            opacity: 1; 
          }
        }
        
        @keyframes emoji-vanish {
          0% { 
            transform: scale(1) rotate(0deg); 
            opacity: 1; 
          }
          50% { 
            transform: scale(1.2) rotate(-90deg); 
            opacity: 0.5; 
          }
          100% { 
            transform: scale(0) rotate(-180deg); 
            opacity: 0; 
          }
        }
        
        @keyframes emoji-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes winning-cell {
          0%, 100% { 
            background-color: rgb(254 240 138); 
            transform: scale(1); 
          }
          50% { 
            background-color: rgb(253 224 71); 
            transform: scale(1.05); 
          }
        }
        
        .animate-emoji-appear { animation: emoji-appear 0.6s ease-out; }
        .animate-emoji-vanish { animation: emoji-vanish 0.4s ease-in; }
        .animate-emoji-bounce { animation: emoji-bounce 2s ease-in-out infinite; }
        .animate-winning-cell { animation: winning-cell 1s ease-in-out infinite; }
      `}</style>
    </button>
  )
}
