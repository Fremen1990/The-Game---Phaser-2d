/// <reference path="../../typings/phaser.d.ts" />
import Phaser from "phaser";

class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: "LoadingScene" });
  }

  create() {
    this.add.text(20, 20, "LOADING GAME...");

    setTimeout(() => {
      this.scene.start("StartScene");
    }, 500);
  }
}

export default LoadingScene;
