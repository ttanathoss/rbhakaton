import { Scene } from "phaser";
import { CANVAS_X, CANVAS_Y } from "../../ui/const";
import { toggleScoreTime } from "../../ui/updateUI";

class GameOverScene extends Scene {
  constructor() {
    super("GameOverScene");
  }

  preload() {
    toggleScoreTime(false);
    this.load.image("outro", "assets/img/outro.png");
  }

  create() {
    this.add.image(CANVAS_X / 2, CANVAS_Y / 2, "outro").setScale(4);
  }
}

export default GameOverScene;
