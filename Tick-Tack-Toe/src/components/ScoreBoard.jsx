"use client"

import { Badge } from "@/components/ui/badge"
import { Trophy } from "lucide-react"

export default function PlayerStatus({ gameState, currentPlayer, winner }) {
  if (gameState === "playing") {
    return (
      <Badge
        variant="outline"
        className={`text-lg px-4 py-2 animate-turn-indicator transform transition-all duration-500 ${
          currentPlayer === 1 ? "border-blue-500 text-blue-600" : "border-red-500 text-red-600"
        }`}
      >
        Player {currentPlayer}'s Turn
        <style jsx>{`
          @keyframes turn-indicator {
            0% { transform: scale(0.9); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          
          .animate-turn-indicator { animation: turn-indicator 0.6s ease-out; }
        `}</style>
      </Badge>
    )
  }

  if (gameState === "game-over" && winner) {
    return (
      <div className="flex items-center justify-center gap-2 text-2xl font-bold text-green-600 animate-winner-celebration">
        <Trophy className="animate-trophy-bounce" />
        Player {winner} Wins!
        <Trophy className="animate-trophy-bounce" />
        <style jsx>{`
          @keyframes winner-celebration {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          
          @keyframes trophy-bounce {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(-5deg); }
            75% { transform: translateY(-5px) rotate(5deg); }
          }
          
          .animate-winner-celebration { animation: winner-celebration 0.8s ease-out; }
          .animate-trophy-bounce { animation: trophy-bounce 1s ease-in-out infinite; }
        `}</style>
      </div>
    )
  }

  return null
}
