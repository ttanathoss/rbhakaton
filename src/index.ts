import { Game, Types } from "phaser";
import { GameScene } from "./scenes";
import GridEngine from "grid-engine";

const gameConfig: Types.Core.GameConfig = {
  title: "Mooncraft",
  type: Phaser.AUTO,
  width: 768, // 12 tiles x 16px x 4 zoom
  height: 512, // 8 tiles x 16px x 4 zoom
  parent: "game",
  roundPixels: true,
  antialias: false,
  backgroundColor: "#183a6c",
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
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
  scene: [GameScene],
  plugins: {
    scene: [
      {
        key: "gridEngine",
        plugin: GridEngine,
        mapping: "gridEngine",
      },
    ],
  },
};

window.game = new Game(gameConfig);
