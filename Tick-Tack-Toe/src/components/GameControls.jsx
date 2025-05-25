"use client"

import { Button } from "@/components/ui/button"
import { RotateCcw, HelpCircle } from "lucide-react"

export default function GameControls({ onResetGame, onNewGame, onShowHelp }) {
  return (
    <div className="flex justify-center gap-4 animate-controls-appear">
      <Button
        onClick={onResetGame}
        variant="outline"
        className="gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-md animate-button-float"
      >
        <RotateCcw size={16} className="animate-spin-on-hover" />
        Play Again
      </Button>
      <Button
        onClick={onNewGame}
        variant="outline"
        className="transform transition-all duration-300 hover:scale-105 hover:shadow-md animate-button-float"
        style={{ animationDelay: "0.1s" }}
      >
        New Game
      </Button>
      <Button
        onClick={onShowHelp}
        variant="outline"
        className="gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-md animate-button-float"
        style={{ animationDelay: "0.2s" }}
      >
        <HelpCircle size={16} className="animate-pulse" />
        Help
      </Button>

      <style jsx>{`
        @keyframes controls-appear {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes button-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        .animate-controls-appear { animation: controls-appear 0.6s ease-out; }
        .animate-button-float { animation: button-float 3s ease-in-out infinite; }
        
        .animate-spin-on-hover {
          transition: transform 0.3s ease;
        }
        
        button:hover .animate-spin-on-hover {
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  )
}
