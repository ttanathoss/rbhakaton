import { GameObjects, Tilemaps, Scene, Types } from "phaser";
import { Player } from "../../classes/player";

export class LevelScene extends Scene {
  private player!: GameObjects.Sprite;
  private map!: Tilemaps.Tilemap;
  private testTileset!: Tilemaps.Tileset;
  private platformsLayer!: Tilemaps.TilemapLayer;
  private backgroundLayer!: Tilemaps.TilemapLayer;

  private landerTileset!: Tilemaps.Tileset;
  private groundLayer!: Tilemaps.TilemapLayer;
  private furnitureLayer!: Tilemaps.TilemapLayer;

  private inputs!: Types.Input.Keyboard.CursorKeys;

  constructor() {
    super("level-scene");
  }

  preload(): void {
    this.load.baseURL = "assets/";
    this.load.atlas("player", "spritesheets/astronaut.png", "spritesheets/astronaut_atlas.json");

    this.load.image({
      key: "game-tiles",
      url: "tilemaps/tiles/game-tiles.png",
    });
    this.load.tilemapTiledJSON("game-map", "tilemaps/json/sec-try.json");
  }

  create(): void {
    this.initMap();

    this.player = new Player(this);
    this.player = new Player(this).collideWith(this.platformsLayer);

    this.initCamera();

    this.platformsLayer.setCollisionByExclusion([-1], true);

    this.inputs = this.input.keyboard.createCursorKeys();
  }

  update(): void {
    this.player.update(this.inputs);
  }

  private initCamera(): void {
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels).startFollow(this.player, false);
    this.cameras.main.zoom = 1;
  }

  private initMap(): void {
    this.map = this.make.tilemap({
      key: "game-map",
      tileWidth: 16,
      tileHeight: 16,
    });
    this.testTileset = this.map.addTilesetImage("map-tileset", "game-tiles"); // (tileset-name-from-Tiled, image.key )
    this.backgroundLayer = this.map.createLayer("background", this.testTileset, 0, 0); // (layer-name-from-Tiled, Tileset)
    this.platformsLayer = this.map.createLayer("platforms", this.testTileset, 0, 0); // (layer-name-from-Tiled, Tileset)
  }
}
