import { Button} from "@/components/ui/button.jsx"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Sparkles } from "lucide-react"
import { EMOJI_CATEGORIES } from "../constants/gameConstants.js"


export default function CategorySelection({ selectedCategories, onCategorySelect, onStartGame, onShowHelp }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-slide-down">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="text-purple-600 animate-spin-slow" />
            <h1 className="uppercase">Emoji Tic Tac Toe</h1>
            <Sparkles className="text-purple-600 animate-spin-slow" />
          </h1>
          <p className="text-gray-600 animate-pulse">Choose your emoji categories!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Player 1 Selection */}
          <Card className="border-2 border-blue-300 animate-slide-left">
            <CardHeader>
              <CardTitle className="text-center text-blue-600 animate-bounce-gentle">
                Player 1 - Choose Your Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {Object.entries(EMOJI_CATEGORIES).map(([key, category], index) => (
                  <button
                    key={key}
                    onClick={() => onCategorySelect(1, key)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      selectedCategories.player1 === key
                        ? `${category.color} border-blue-500 scale-105 animate-glow-blue`
                        : "bg-white border-gray-200 hover:border-blue-300"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2 animate-emoji-float">{category.emojis.slice(0, 4).join(" ")}</div>
                      <div className="font-semibold">{category.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Player 2 Selection */}
          <Card className="border-2 border-red-300 animate-slide-right">
            <CardHeader>
              <CardTitle className="text-center text-red-600 animate-bounce-gentle">
                Player 2 - Choose Your Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {Object.entries(EMOJI_CATEGORIES).map(([key, category], index) => (
                  <button
                    key={key}
                    onClick={() => onCategorySelect(2, key)}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      selectedCategories.player2 === key
                        ? `${category.color} border-red-500 scale-105 animate-glow-red`
                        : "bg-white border-gray-200 hover:border-red-300"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2 animate-emoji-float">{category.emojis.slice(0, 4).join(" ")}</div>
                      <div className="font-semibold">{category.name}</div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 animate-slide-up">
          <Button
            onClick={onStartGame}
            disabled={!selectedCategories.player1 || !selectedCategories.player2}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-gentle"
          >
            Start Game! 🎮
          </Button>
        </div>

        <div className="text-center mt-4 animate-slide-up">
          <Button
            variant="outline"
            onClick={onShowHelp}
            className="gap-2 transform transition-all duration-300 hover:scale-105"
          >
            <span className="animate-bounce">❓</span>
            How to Play
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-down {
          from { transform: translateY(-50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slide-left {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-right {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes emoji-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        
        @keyframes glow-blue {
          0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes glow-red {
          0%, 100% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.5); }
          50% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.8); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-slide-down { animation: slide-down 0.6s ease-out; }
        .animate-slide-left { animation: slide-left 0.6s ease-out; }
        .animate-slide-right { animation: slide-right 0.6s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-emoji-float { animation: emoji-float 2s ease-in-out infinite; }
        .animate-glow-blue { animation: glow-blue 2s ease-in-out infinite; }
        .animate-glow-red { animation: glow-red 2s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
