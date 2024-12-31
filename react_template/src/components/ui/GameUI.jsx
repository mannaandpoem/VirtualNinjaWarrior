// src/components/ui/GameUI.jsx
import React from 'react';
import { GAME_STATES } from '../../utils/constants';

const GameUI = ({ gameState, playerHealth, currentLevel, score }) => {
  return (
    <div className="absolute top-0 left-0 w-full p-4">
      <div className="flex justify-between items-center">
        {/* Health Bar */}
        <div className="flex items-center space-x-4">
          <div className="bg-red-900 h-4 w-32 rounded">
            <div
              className="bg-red-500 h-full rounded transition-all duration-300"
              style={{ width: `${playerHealth}%` }}
            />
          </div>
          <span className="text-white font-bold">HP: {playerHealth}</span>
        </div>

        {/* Level Indicator */}
        <div className="bg-blue-900 px-4 py-2 rounded">
          <span className="text-white font-bold">Level {currentLevel}</span>
        </div>
        
        {/* Score Display */}
        <div className="bg-green-900 px-4 py-2 rounded">
          <span className="text-white font-bold">Score: {score}</span>
        </div>
      </div>

      {/* Pause Menu */}
      {gameState === GAME_STATES.PAUSED && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-white text-2xl mb-4">Game Paused</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameUI;