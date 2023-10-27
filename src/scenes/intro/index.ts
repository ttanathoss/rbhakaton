import { Scene, Types } from "phaser";

export class IntroScene extends Scene {
  private cursors!: Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("Intro");
  }

  preload(): void {
    this.load.baseURL = "assets/";
    this.load.image({
      key: "intro",
      url: "spritesheets/intro.png",
    });
  }

  create() {
    this.add.image(768 / 2, 512 / 2, 'intro').setScale(4);
  }

  update() {
    this.cursors = this.input.keyboard.createCursorKeys();
    if (this.cursors.space.isDown) {
      this.scene.start("LevelScene");
    }
  }
}
