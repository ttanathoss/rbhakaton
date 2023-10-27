import { Game, Types } from "phaser";
import { LevelScene } from "./scenes";
import GameOverScene from "./scenes/gameOver";

const gameConfig: Types.Core.GameConfig = {
  title: "Finish hero",
  type: Phaser.AUTO,
  width: 832, // 13 tiles x 16px x 4 zoom
  height: 576, // 9 tiles x 16px x 4 zoom
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
  scene: [LevelScene, GameOverScene],
};

window.game = new Game(gameConfig);
