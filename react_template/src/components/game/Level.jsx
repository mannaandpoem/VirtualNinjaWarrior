// src/components/game/Level.jsx
import React from 'react';
import { LEVEL_CONFIG } from '../../utils/constants';

class Level {
  static currentLevel = 1;
  static obstacles = [];
  static enemies = [];
  static defeatedEnemies = 0;

  static loadLevel(levelNumber) {
    const levelData = LEVEL_CONFIG[levelNumber];
    this.obstacles = levelData.obstacles;
    this.enemies = levelData.enemies;
    this.currentLevel = levelNumber;
    this.defeatedEnemies = 0;
  }

  static render(ctx, levelNumber) {
    // Draw background
    ctx.fillStyle = '#1a202c';
    ctx.fillRect(0, 0, 800, 600);

    // Draw obstacles
    this.obstacles.forEach(obstacle => {
      ctx.fillStyle = '#2d3748';
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });

    // Draw enemies
    this.enemies.forEach(enemy => {
      if (!enemy.defeated) {
        ctx.fillStyle = '#c53030';
        ctx.fillRect(enemy.x, enemy.y, 32, 32);
      }
    });
  }

  static checkCollision(x, y, width, height) {
    return this.obstacles.some(obstacle =>
      x < obstacle.x + obstacle.width &&
      x + width > obstacle.x &&
      y < obstacle.y + obstacle.height &&
      y + height > obstacle.y
    );
  }

  static defeatEnemy(enemyIndex) {
    if (this.enemies[enemyIndex] && !this.enemies[enemyIndex].defeated) {
      this.enemies[enemyIndex].defeated = true;
      this.defeatedEnemies++;
    }
  }

  static getDefeatedEnemies() {
    return this.defeatedEnemies;
  }

  static isLevelComplete() {
    return this.enemies.every(enemy => enemy.defeated);
  }
}

export default Level;