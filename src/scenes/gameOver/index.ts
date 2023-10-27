import { Scene } from "phaser";

class GameOverScene extends Scene {
  constructor() {
    super("GameOver");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000");

    document.getElementsByClassName("game-over")[0].classList.add("visible");
  }
}

export default GameOverScene;
