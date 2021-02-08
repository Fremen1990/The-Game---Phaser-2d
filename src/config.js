/// <reference path="../typings/phaser.d.ts"/>

import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#33A5E7',
  scale: {
    width: 800,
    height: 400,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  render: {
    pixelArt: true,
  },

  audio: {
    noAudio: true,
  },

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 750 },
      debug: false,
      debugShowVelocity: true,
      debugShowBody: true,
      debugShowStaticBody: true,
    }
  }

};
