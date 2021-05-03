/// <reference path="../../typings/phaser.d.ts" />
import Phaser from "phaser";
import config from "../config";
import eventsCenter from "./EventsCenter";

class ButtonsScene extends Phaser.Scene {
  constructor() {
    super({ key: "ButtonsScene" });

    this.mobileGoRight;
    // this.mobileGoRight;
    // this.mobileGoRight;
  }

  preload() {
    this.load.image("buttonLeft", "../../assets/buttons/left.png");
    this.load.image("buttonRight", "../../assets/buttons/right.png");
    this.load.image("buttonUp", "../../assets/buttons/up.png");
  }

  create() {
    let buttonRight = this.add
      .sprite(
        config.scale.width - 100,
        config.scale.height - 100,
        "buttonRight"
      )
      .setOrigin(0, 0);

    buttonRight.setInteractive();

    this.right;

    let pointer = buttonRight.input.activePointer;

    buttonRight.on("pointerdown", () => {
      this.right = true;
      eventsCenter.emit("update-score", this.right);
      eventsCenter.emit("go-to-right-emitt", this.right);
    });

    buttonRight.on("pointerup", () => {
      this.right = false;
      eventsCenter.emit("go-to-right-emitt", this.right);
    });
  }
}

export default ButtonsScene;
