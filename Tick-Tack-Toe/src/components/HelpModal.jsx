"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HelpModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-modal-backdrop">
      <Card className="max-w-2xl max-h-[80vh] overflow-y-auto animate-modal-content transform">
        <CardHeader>
          <CardTitle className="text-center animate-title-glow">How to Play Emoji Tic Tac Toe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="animate-section-appear" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold mb-2">🎯 Objective</h3>
            <p>Be the first to get 3 of your emojis in a row (horizontal, vertical, or diagonal)!</p>
          </div>

          <div className="animate-section-appear" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold mb-2">🎮 How to Play</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Each player chooses an emoji category before the game starts</li>
              <li>Players take turns placing random emojis from their category</li>
              <li>Each player can only have 3 emojis on the board at once</li>
              <li>When you place a 4th emoji, your oldest emoji disappears!</li>
              <li>You cannot place your 4th emoji where your 1st emoji was</li>
            </ul>
          </div>

          <div className="animate-section-appear" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-semibold mb-2">🏆 Winning</h3>
            <p>Get 3 of your emojis in a line to win! The game continues until someone wins - no draws possible!</p>
          </div>

          <div className="animate-section-appear" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-semibold mb-2">✨ Special Rules</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Maximum 6 emojis on board (3 per player)</li>
              <li>Oldest emoji vanishes when placing 4th (FIFO)</li>
              <li>Cannot place 4th emoji on 1st emoji's position</li>
              <li>Random emoji assigned from your category each turn</li>
            </ul>
          </div>

          <Button
            onClick={onClose}
            className="w-full transform transition-all duration-300 hover:scale-105 animate-close-button"
          >
            Got it! Let's Play! 🎉
          </Button>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes modal-backdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modal-content {
          from { 
            transform: scale(0.7) translateY(-50px); 
            opacity: 0; 
          }
          to { 
            transform: scale(1) translateY(0); 
            opacity: 1; 
          }
        }
        
        @keyframes section-appear {
          from { 
            transform: translateX(-20px); 
            opacity: 0; 
          }
          to { 
            transform: translateX(0); 
            opacity: 1; 
          }
        }
        
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(147, 51, 234, 0.3); }
          50% { text-shadow: 0 0 20px rgba(147, 51, 234, 0.6); }
        }
        
        @keyframes close-button {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-modal-backdrop { animation: modal-backdrop 0.3s ease-out; }
        .animate-modal-content { animation: modal-content 0.4s ease-out; }
        .animate-section-appear { animation: section-appear 0.5s ease-out; }
        .animate-title-glow { animation: title-glow 2s ease-in-out infinite; }
        .animate-close-button { animation: close-button 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
