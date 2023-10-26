import { Actor } from "./actor";

export class Player extends Actor {

  constructor(scene: Phaser.Scene) {
    super(scene, 0, 0, "astronaut");
    return this;
  }

  update(): void {
  }
}