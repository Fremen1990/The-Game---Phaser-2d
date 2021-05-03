/// <reference path="../typings/phaser.d.ts" />
import Phaser from "phaser";
import config from "./config";
import ButtonsScene from "./scenes/ButtonsScene";
import LoadingScene from "./scenes/LoadingScene";
import StartScene from "./scenes/StartScene";
import GameScene from "./scenes/Game";
import GameOverScene from "./scenes/GameOverScene";
import ScoreScene from "./scenes/ScoreScene";

new Phaser.Game(
  Object.assign(config, {
    scene: [
      LoadingScene,
      StartScene,
      GameScene,
      GameOverScene,
      ButtonsScene,
      ScoreScene,
    ],
  })
);
