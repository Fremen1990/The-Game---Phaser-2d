/// <reference path="../../typings/phaser.d.ts" />

import Phaser from "phaser";

class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameOverScene" });
  }

  create() {
    this.add.text(20, 20, "GAME OVER!");

    this.add.text(40, 40, "Click to play again");

    this.input.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}

export default GameOverScene;
