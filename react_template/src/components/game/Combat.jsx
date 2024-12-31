// src/components/game/Combat.jsx
import React from 'react';
import { WEAPONS, DAMAGE_TYPES } from '../../utils/constants';

class Combat {
  static activeEffects = [];
  static projectiles = [];

  static performAttack(weaponType) {
    const weapon = WEAPONS[weaponType];
    const attack = {
      damage: weapon.damage,
      range: weapon.range,
      type: weapon.type
    };

    if (weapon.type === 'ranged') {
      this.createProjectile(weapon);
    }

    this.addEffect({
      x: 0,
      y: 0,
      width: weapon.range,
      height: 10,
      color: '#fef08a',
      opacity: 0.6,
      duration: 200
    });

    return attack;
  }

  static createProjectile(weapon) {
    this.projectiles.push({
      x: Player.position.x,
      y: Player.position.y,
      dx: Player.direction * 10,
      dy: 0,
      damage: weapon.damage,
      range: weapon.range
    });
  }

  static render(ctx) {
    // Render active effects
    this.activeEffects.forEach((effect, index) => {
      ctx.fillStyle = effect.color;
      ctx.globalAlpha = effect.opacity;
      ctx.fillRect(effect.x, effect.y, effect.width, effect.height);
      
      // Remove expired effects
      if (Date.now() - effect.startTime > effect.duration) {
        this.activeEffects.splice(index, 1);
      }
    });
    ctx.globalAlpha = 1;

    // Render projectiles
    this.projectiles.forEach(projectile => {
      ctx.fillStyle = '#fbd38d';
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  static addEffect(effect) {
    effect.startTime = Date.now();
    this.activeEffects.push(effect);
  }

  static updateProjectiles() {
    this.projectiles.forEach(projectile => {
      projectile.x += projectile.dx;
      projectile.y += projectile.dy;
    });
    
    // Remove out-of-bounds projectiles
    this.projectiles = this.projectiles.filter(p =>
      p.x >= 0 && p.x <= 800 && p.y >= 0 && p.y <= 600
    );
  }
}

export default Combat;