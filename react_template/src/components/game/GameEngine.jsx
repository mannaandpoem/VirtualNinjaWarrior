// src/components/game/GameEngine.jsx
import React, { useEffect, useRef } from 'react';
import { useKeyboardControls } from '../../utils/controls';
import Player from './Player';
import Level from './Level';
import Combat from './Combat';
import { GAME_STATES } from '../../utils/constants';

const GameEngine = ({ gameState, currentLevel, setPlayerHealth, setScore }) => {
  const canvasRef = useRef(null);
  const { playerPosition, playerMovement, keys } = useKeyboardControls();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const gameLoop = () => {
      if (gameState === GAME_STATES.PLAYING) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update game state
        updateGameState();

        // Render game elements
        renderGame(ctx);
      }

      animationFrameId = window.requestAnimationFrame(gameLoop);
    };

    const updateGameState = () => {
      playerMovement();
      Combat.updateProjectiles();
      
      // Check collisions with enemies
      Level.enemies.forEach(enemy => {
        if (checkCollision(playerPosition, enemy)) {
          setPlayerHealth(prev => Math.max(0, prev - 10));
        }
      });

      // Update score based on enemy defeats
      setScore(prev => prev + Level.getDefeatedEnemies());
    };

    const renderGame = (ctx) => {
      Level.render(ctx, currentLevel);
      Player.render(ctx, playerPosition);
      Combat.render(ctx);
    };

    const checkCollision = (pos1, pos2) => {
      return Math.abs(pos1.x - pos2.x) < 32 && Math.abs(pos1.y - pos2.y) < 32;
    };

    gameLoop();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [gameState, currentLevel, playerPosition, playerMovement, setPlayerHealth, setScore]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      className="border border-gray-800 mx-auto"
    />
  );
};

export default GameEngine;