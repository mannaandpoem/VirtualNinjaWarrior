// src/utils/constants.js

export const GAME_STATES = {
  MENU: 'menu',
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAME_OVER: 'gameOver'
};

export const PLAYER_STATES = {
  IDLE: 'idle',
  WALKING: 'walking',
  ATTACKING: 'attacking',
  STEALTH: 'stealth',
  DEAD: 'dead'
};

export const WEAPONS = {
  katana: {
    damage: 25,
    range: 50,
    type: 'melee',
    cooldown: 400
  },
  shuriken: {
    damage: 15,
    range: 200,
    type: 'ranged',
    cooldown: 600
  },
  smokeBomb: {
    damage: 0,
    range: 100,
    type: 'utility',
    cooldown: 5000,
    effect: 'stealth'
  }
};

export const DAMAGE_TYPES = {
  PHYSICAL: 'physical',
  MAGICAL: 'magical'
};

export const LEVEL_CONFIG = {
  1: {
    obstacles: [
      { x: 100, y: 100, width: 50, height: 200 },
      { x: 300, y: 300, width: 200, height: 50 },
      { x: 600, y: 150, width: 50, height: 300 }
    ],
    enemies: [
      { x: 400, y: 200, type: 'patrol', path: [
        { x: 400, y: 200 },
        { x: 400, y: 400 }
      ]},
      { x: 600, y: 400, type: 'stationary', range: 150 },
      { x: 200, y: 500, type: 'aggressive', speed: 3 }
    ]
  },
  2: {
    obstacles: [
      { x: 150, y: 150, width: 100, height: 100 },
      { x: 400, y: 200, width: 300, height: 50 },
      { x: 200, y: 400, width: 50, height: 200 }
    ],
    enemies: [
      { x: 300, y: 300, type: 'patrol', path: [
        { x: 300, y: 300 },
        { x: 500, y: 300 }
      ]},
      { x: 650, y: 350, type: 'stationary', range: 200 },
      { x: 150, y: 450, type: 'aggressive', speed: 4 }
    ]
  },
  3: {
    obstacles: [
      { x: 50, y: 50, width: 150, height: 50 },
      { x: 350, y: 150, width: 50, height: 300 },
      { x: 500, y: 250, width: 250, height: 50 }
    ],
    enemies: [
      { x: 200, y: 200, type: 'patrol', path: [
        { x: 200, y: 200 },
        { x: 200, y: 400 },
        { x: 400, y: 400 },
        { x: 400, y: 200 }
      ]},
      { x: 600, y: 300, type: 'stationary', range: 250 },
      { x: 100, y: 500, type: 'aggressive', speed: 5 }
    ]
  }
};

export const ENEMY_TYPES = {
  patrol: {
    health: 50,
    damage: 10,
    detectRange: 150
  },
  stationary: {
    health: 40,
    damage: 15,
    detectRange: 200
  },
  aggressive: {
    health: 60,
    damage: 20,
    detectRange: 300
  }
};

export const GAME_CONFIG = {
  canvas: {
    width: 800,
    height: 600
  },
  player: {
    speed: 5,
    size: 32,
    startingHealth: 100,
    stealthDuration: 5000
  },
  scoring: {
    enemyDefeat: 100,
    levelComplete: 500,
    stealthKill: 150
  }
};