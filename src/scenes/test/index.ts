import { GameObjects, Tilemaps, Scene } from "phaser";
import { Player } from "../../classes/player";

export class TestScene extends Scene {
  private player!: GameObjects.Sprite;
  private map!: Tilemaps.Tilemap;
  private testTileset!: Tilemaps.Tileset;
  private platformsLayer!: Tilemaps.TilemapLayer;

  private landerTileset!: Tilemaps.Tileset;
  private groundLayer!: Tilemaps.TilemapLayer;
  private furnitureLayer!: Tilemaps.TilemapLayer;

  constructor() {
    super("test-scene");
  }

  preload(): void {
    this.load.baseURL = "assets/";
    this.load.atlas("astronaut", "spritesheets/astronaut.png", "spritesheets/astronaut_atlas.json");

    this.load.image({
      key: "game-tiles",
      url: "tilemaps/tiles/mario-bg-tiles.png",
    });
    this.load.tilemapTiledJSON("game-map", "tilemaps/json/sec-try.json");
  }

  create(): void {
    this.initMap();

    this.player = new Player(this).collideWith(this.platformsLayer);

    this.initCamera();

    this.platformsLayer.setCollisionByExclusion([-1], true)
  }

  update(): void {
  }

  private initCamera(): void {
    this.cameras.main.startFollow(this.player, false);
    this.cameras.main.zoom = 4;
  }

  private initMap(): void {
    this.map = this.make.tilemap({
      key: "game-map",
      tileWidth: 16,
      tileHeight: 16,
    });
    this.testTileset = this.map.addTilesetImage("map-tileset", "game-tiles"); // (file-name, tileset-name-from-Tiled)
    this.platformsLayer = this.map.createLayer("platforms", this.testTileset, 0, 0); // (layer-name-from-Tiled, Tileset)
  }
}
