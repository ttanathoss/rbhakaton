import { Tilemaps, Scene, Types } from "phaser";
import { Player } from "../../classes/player";
import { Coin } from "../../classes/coin";
import { updateDisplayedScore, updateDisplayedTimeLeft } from "../../ui/updateUI";

export class LevelScene extends Scene {
  private player!: Player;
  private map!: Tilemaps.Tilemap;
  private testTileset!: Tilemaps.Tileset;
  private platformsLayer!: Tilemaps.TilemapLayer;
  private coins!: any;
  private backgroundLayer!: Tilemaps.TilemapLayer;

  private landerTileset!: Tilemaps.Tileset;
  private groundLayer!: Tilemaps.TilemapLayer;
  private furnitureLayer!: Tilemaps.TilemapLayer;

  private inputs!: Types.Input.Keyboard.CursorKeys;
  private timeLeft: number;
  private score: number;

  constructor() {
    super("level-scene");

    this.timeLeft = 3 * 1000; //in ms
    this.score = 0;
  }

  preload(): void {
    this.load.baseURL = "assets/";
    this.load.atlas("player", "spritesheets/mr_finish_walk_jump_sheet.png", "spritesheets/mr_finish_atlas.json");
    this.load.atlas("plate", "spritesheets/plate_1.png", "spritesheets/plate_atlas.json");

    this.load.image({
      key: "game-tiles",
      url: "tilemaps/tiles/finish-map-tiles.png",
    });
    this.load.tilemapTiledJSON("game-map", "tilemaps/json/finish-map.json");
  }

  create(): void {
    this.initMap();

    this.player = new Player(this).collideWith(this.platformsLayer);
    this.coins = new Coin(this).collideWith(this.player);

    this.initCamera();

    this.platformsLayer.setCollisionByExclusion([-1], true);

    this.inputs = this.input.keyboard.createCursorKeys();
  }

  update(elapsed: number, delta: number): void {
    this.player.update(this.inputs);

    const updatedTimeLeft = this.timeLeft - delta;
    if (updatedTimeLeft <= 0) {
      this.gameEnd();
    } else {
      this.timeLeft = updatedTimeLeft;
      updateDisplayedTimeLeft(updatedTimeLeft);
    }
  }

  private initCamera(): void {
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels).startFollow(this.player, false);
    this.cameras.main.zoom = 3;
  }

  private initMap(): void {
    this.map = this.make.tilemap({
      key: "game-map",
      tileWidth: 16,
      tileHeight: 16,
    });
    this.testTileset = this.map.addTilesetImage("finish-map-tiles", "game-tiles"); // (tileset-name-from-Tiled, image.key )
    this.backgroundLayer = this.map.createLayer("background", this.testTileset, 0, 0); // (layer-name-from-Tiled, Tileset)
    this.platformsLayer = this.map.createLayer("platforms", this.testTileset, 0, 0); // (layer-name-from-Tiled, Tileset)
  }

  updateScore(newPoints: number) {
    this.score += newPoints;
    updateDisplayedScore(this.score);
  }

  gameEnd() {
    this.player.die();
    this.input.keyboard.shutdown();

    setTimeout(() => {
      this.scene.start("GameOverScene");
    }, 1000);
  }
}
