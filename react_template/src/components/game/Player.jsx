// src/components/game/Player.jsx
import React from 'react';
import { PLAYER_STATES, WEAPONS } from '../../utils/constants';
import Combat from './Combat';

class Player {
  static position = { x: 100, y: 100 };
  static state = PLAYER_STATES.IDLE;
  static health = 100;
  static weapons = ['katana', 'shuriken'];
  static currentWeapon = 'katana';
  static direction = 1; // 1 for right, -1 for left

  static movePlayer(dx, dy) {
    this.position.x += dx;
    this.position.y += dy;
    if (dx !== 0) this.direction = Math.sign(dx);
  }

  static render(ctx, position) {
    // Draw player character
    ctx.fillStyle = '#4a5568';
    ctx.fillRect(position.x, position.y, 32, 32);

    // Draw weapon
    this.renderWeapon(ctx, position);
  }

  static renderWeapon(ctx, position) {
    const weapon = WEAPONS[this.currentWeapon];
    ctx.strokeStyle = '#718096';
    ctx.beginPath();
    ctx.moveTo(position.x + 16, position.y + 16);
    ctx.lineTo(
      position.x + 16 + (weapon.range * this.direction),
      position.y + 16
    );
    ctx.stroke();
  }

  static attack() {
    this.state = PLAYER_STATES.ATTACKING;
    const attackResult = Combat.performAttack(this.currentWeapon);
    setTimeout(() => {
      this.state = PLAYER_STATES.IDLE;
    }, 200);
    return attackResult;
  }

  static switchWeapon() {
    const currentIndex = this.weapons.indexOf(this.currentWeapon);
    this.currentWeapon = this.weapons[(currentIndex + 1) % this.weapons.length];
  }

  static takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    if (this.health <= 0) {
      this.die();
    }
  }

  static die() {
    this.state = PLAYER_STATES.DEAD;
  }
}

export default Player;