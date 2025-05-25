"use client"

export default function EmojiCounter({ playerEmojis }) {
  return (
    <div className="flex justify-center gap-8 mb-6 animate-counter-slide">
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-1">Player 1 Emojis</div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded border-2 flex items-center justify-center text-sm transition-all duration-300 transform ${
                i < playerEmojis.player1.length
                  ? "bg-blue-100 border-blue-300 scale-100 animate-emoji-slot-fill"
                  : "bg-gray-100 border-gray-300 scale-90 opacity-50"
              }`}
            >
              <span className={playerEmojis.player1[i] ? "animate-mini-bounce" : ""}>
                {playerEmojis.player1[i]?.emoji || ""}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-1">Player 2 Emojis</div>
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded border-2 flex items-center justify-center text-sm transition-all duration-300 transform ${
                i < playerEmojis.player2.length
                  ? "bg-red-100 border-red-300 scale-100 animate-emoji-slot-fill"
                  : "bg-gray-100 border-gray-300 scale-90 opacity-50"
              }`}
            >
              <span className={playerEmojis.player2[i] ? "animate-mini-bounce" : ""}>
                {playerEmojis.player2[i]?.emoji || ""}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes counter-slide {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes emoji-slot-fill {
          0% { transform: scale(0); }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
        
        @keyframes mini-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
        
        .animate-counter-slide { animation: counter-slide 0.5s ease-out; }
        .animate-emoji-slot-fill { animation: emoji-slot-fill 0.4s ease-out; }
        .animate-mini-bounce { animation: mini-bounce 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
