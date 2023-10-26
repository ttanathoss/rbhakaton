import { Actor } from "./actor";

export class Player extends Actor {

  constructor(scene: Phaser.Scene) {
    super(scene, 10, 10, "astronaut");
  }

  update(): void {
  }
}
