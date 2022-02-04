import Phaser from "phaser";
import config from "../config";
import eventsCenter from "./EventsCenter";

class ScoreScene extends Phaser.Scene {
  constructor() {
    super({ key: "ScoreScene" });
  }

  create() {
    this.label = this.add.text(20, 20, "Score: 99", { fontSize: 24 });

    eventsCenter.on("update-score", this.updateScore);
  }

  updateScore(scoreCount) {
    this.label.text = `Score: ${scoreCount}`;
  }
}

export default ScoreScene;
