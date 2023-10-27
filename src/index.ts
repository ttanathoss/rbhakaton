import { Game, Types } from "phaser";
import { IntroScene, LevelScene } from "./scenes";
import GameOverScene from "./scenes/gameOver";
import { CANVAS_X, CANVAS_Y } from "./ui/const";

const gameConfig: Types.Core.GameConfig = {
  title: "Finish hero",
  type: Phaser.AUTO,
  width: CANVAS_X,
  height: CANVAS_Y,
  parent: "game",
  roundPixels: true,
  antialias: false,
  backgroundColor: "#183a6c",
  physics: {
    default: "arcade",
    arcade: {
      // debug: true,
      gravity: {
        y: 1000,
      },
    },
  },
  render: {
    antialiasGL: false,
    antialias: false,
    pixelArt: true,
  },
  canvasStyle: `display: block; max-width: 100vw; max-height: 100vh; margin: auto;`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  },
  scene: [IntroScene, LevelScene, GameOverScene],
};

window.game = new Game(gameConfig);
