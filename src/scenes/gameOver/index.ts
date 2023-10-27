import { Scene, Types } from "phaser";
import { CANVAS_X, CANVAS_Y } from "../../ui/const";
import { toggleScoreTime } from "../../ui/updateUI";

class GameOverScene extends Scene {
  private cursors!: Types.Input.Keyboard.CursorKeys;

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

  update() {
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.space.isDown) {
      this.scene.start("LevelScene");
    }
  }
}

export default GameOverScene;
