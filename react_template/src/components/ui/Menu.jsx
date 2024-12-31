// src/components/ui/Menu.jsx
import React from 'react';

const Menu = ({ onStart, onSettings, onExit }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-white mb-8">
          Virtual Ninja Warrior
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={onStart}
            className="w-48 px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Start Game
          </button>
          
          <button
            onClick={onSettings}
            className="w-48 px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
          >
            Settings
          </button>
          
          <button
            onClick={onExit}
            className="w-48 px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;