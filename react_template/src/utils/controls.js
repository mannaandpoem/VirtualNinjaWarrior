// controls.js
import { useState, useEffect } from 'react';

export const useKeyboardControls = () => {
  const [keys, setKeys] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
    attack: false
  });

  const [playerPosition, setPlayerPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', ' '].includes(key)) {
        setKeys(prev => ({
          ...prev,
          up: key === 'w' ? true : prev.up,
          down: key === 's' ? true : prev.down,
          left: key === 'a' ? true : prev.left,
          right: key === 'd' ? true : prev.right,
          attack: key === ' ' ? true : prev.attack
        }));
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', ' '].includes(key)) {
        setKeys(prev => ({
          ...prev,
          up: key === 'w' ? false : prev.up,
          down: key === 's' ? false : prev.down,
          left: key === 'a' ? false : prev.left,
          right: key === 'd' ? false : prev.right,
          attack: key === ' ' ? false : prev.attack
        }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const playerMovement = () => {
    const speed = 5;
    setPlayerPosition(prev => ({
      x: prev.x + (keys.right ? speed : 0) - (keys.left ? speed : 0),
      y: prev.y + (keys.down ? speed : 0) - (keys.up ? speed : 0)
    }));
  };

  return { playerPosition, playerMovement, keys };
};