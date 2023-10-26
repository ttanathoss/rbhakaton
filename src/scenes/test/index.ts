import { GameObjects, Scene} from "phaser";
import { Player } from "../../classes/player";

export class TestScene extends Scene {
  private player!: GameObjects.Sprite;


  constructor() {
    super("test-scene");
  }

  create(): void {
    this.player = new Player(this);
  }

  update(): void {
  }
}
