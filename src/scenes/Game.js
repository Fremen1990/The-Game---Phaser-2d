/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';
import Hero from '../entities/Hero';
class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.spritesheet('hero-run-sheet', 'assets/hero/run.png', {
      frameWidth: 32,
      frameHeight: 64,
    }) // here we load hero from png with split per every single animation but from one file
  }

  create(data) {

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: 'hero-running',
      frames: this.anims.generateFrameNumbers('hero-run-sheet'),
      frameRate: 12,
      repeat: -1,
    });// here we have animation for 6x png heroes to be moving and animating 


    this.hero = new Hero(this, 250, 160);

  }

  update(time, delta) {



  }
}

export default Game; 