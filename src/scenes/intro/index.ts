import { Scene, Types } from "phaser";
import { toggleScoreTime } from "../../ui/updateUI";
import { CANVAS_X, CANVAS_Y } from "../../ui/const";

export class IntroScene extends Scene {
  private cursors!: Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("Intro");
  }

  preload(): void {
    toggleScoreTime(false);

    this.load.baseURL = "assets/";
    this.load.image({
      key: "intro",
      url: "img/intro.png",
    });
  }

  create() {
    this.add.image(CANVAS_X / 2, CANVAS_Y / 2, "intro").setScale(4);
  }

  update() {
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.space.isDown) {
      this.scene.start("LevelScene");
    }
  }
}
