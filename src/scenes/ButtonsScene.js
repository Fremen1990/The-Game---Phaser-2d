/// <reference path="../../typings/phaser.d.ts" />
import Phaser from "phaser";
import config from "../config";
import eventsCenter from "./EventsCenter";

class ButtonsScene extends Phaser.Scene {
  constructor() {
    super({ key: "ButtonsScene" });
  }

  preload() {
    this.load.image("buttonLeft", "../../assets/buttons/left.png");
    this.load.image("buttonRight", "../../assets/buttons/right.png");
    this.load.image("buttonUp", "../../assets/buttons/up.png");
  }

  create() {
    // CREATING BUTTON RIGHT SPRITE
    this.buttonRight = this.add
      .sprite(
        config.scale.width - 100,
        config.scale.height - 100,
        "buttonRight"
      )
      .setOrigin(0, 0);

    this.buttonRight.setInteractive().alpha = 0.7;

    // CREATING BUTTON LEFT SPRITE

    this.buttonLeft = this.add
      .sprite(config.scale.width - 200, config.scale.height - 100, "buttonLeft")
      .setOrigin(0, 0);

    this.buttonLeft.setInteractive().alpha = 0.7;

    // CREATING BUTTON UP SPRITE

    this.buttonUp = this.add
      .sprite(config.scale.width - 600, config.scale.height - 100, "buttonUp")
      .setOrigin(0, 0);

    this.buttonUp.setInteractive().alpha = 0.7;
  }

  update() {
    //HANDLING BUTTON RIGHT
    this.buttonRight.on("pointerdown", () => {
      this.right = true;
      // eventsCenter.emit("update-score", this.right);
      eventsCenter.emit("go-to-right-emitt", this.right);
    });

    this.buttonRight.on("pointerup", () => {
      this.right = false;
      eventsCenter.emit("go-to-right-emitt", this.right);
    });

    //HANDLING BUTTON LEFT
    this.buttonLeft.on("pointerdown", () => {
      this.left = true;
      // eventsCenter.emit("update-score", this.left);
      eventsCenter.emit("go-to-left-emitt", this.left);
    });

    this.buttonLeft.on("pointerup", () => {
      this.left = false;
      eventsCenter.emit("go-to-left-emitt", this.left);
    });

    //HANDLING BUTTON UP
    this.buttonUp.on("pointerdown", () => {
      this.up = true;
      // eventsCenter.emit("update-score", this.up);
      eventsCenter.emit("go-to-up-emitt", this.up);
    });

    this.buttonUp.on("pointerup", () => {
      this.up = false;
      eventsCenter.emit("go-to-up-emitt", this.up);
    });
  }
}

export default ButtonsScene;
