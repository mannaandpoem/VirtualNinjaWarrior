// src/App.jsx
import React, { useState } from 'react';
import GameEngine from './components/game/GameEngine';
import Menu from './components/ui/Menu';
import GameUI from './components/ui/GameUI';
import { GAME_STATES } from './utils/constants';

function App() {
  const [gameState, setGameState] = useState(GAME_STATES.MENU);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [score, setScore] = useState(0);

  const handleStartGame = () => {
    setGameState(GAME_STATES.PLAYING);
  };

  const handleSettings = () => {
    setGameState(GAME_STATES.PAUSED);
  };

  const handleExit = () => {
    setGameState(GAME_STATES.MENU);
  };

  return (
    <div className="w-screen h-screen bg-gray-900">
      {gameState === GAME_STATES.MENU ? (
        <Menu
          onStart={handleStartGame}
          onSettings={handleSettings}
          onExit={handleExit}
        />
      ) : (
        <div className="relative w-full h-full">
          <GameEngine
            gameState={gameState}
            currentLevel={currentLevel}
            setPlayerHealth={setPlayerHealth}
            setScore={setScore}
          />
          <GameUI
            gameState={gameState}
            playerHealth={playerHealth}
            currentLevel={currentLevel}
            score={score}
          />
        </div>
      )}
    </div>
  );
}

export default App;