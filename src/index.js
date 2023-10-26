import Phaser from "phaser";

// import Game from "./scenes/Game.js";
// import GameOver from "./scenes/GameOver.js";

// import "./assets/scss/index.scss";

const config = {
  width: 192,
  height: 128,
  parent: "rbhakaton",
  backgroundColor: "#183a6c",
  // title: "Tilemap",
  // url: "webtips.dev",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      // debug: true, // Set it to true if you want debugger enabled by default
      gravity: {
        y: 1000,
      },
    },
  },
  scene: [Lander],
};

new Phaser.Game(config);
