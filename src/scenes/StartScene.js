/// <reference path="../../typings/phaser.d.ts" />
import Phaser from "phaser";

class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  create() {
    this.add.text(20, 20, "Click to start");

    this.input.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}

export default StartScene;
