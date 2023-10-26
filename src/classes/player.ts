import { Scene, Types } from "phaser";
import { Actor } from "./actor";

export class Player extends Actor {
  constructor(scene: Scene) {
    super(scene, 0, 60, "player");
    this.setCollideWorldBounds(true);

    return this;
  }

  update(input: Types.Input.Keyboard.CursorKeys) {
    if (input.left.isDown) {
      this.setVelocityX(-200).setFlipX(true);
      this.getBody().onFloor() && this.play("run", true);
      this.reFollowPlayer();
    } else if (input.right.isDown) {
      this.setVelocityX(200).setFlipX(false);
      this.getBody().onFloor() && this.play("run", true);
      this.reFollowPlayer();
    } else {
      this.setVelocityX(0);
      this.getBody().onFloor() && this.play("idle", true);
    }
    if (input.space.isDown && this.getBody().onFloor()) {
      this.setVelocityY(-400);
      this.play("jump", true);
    }
  }

  reFollowPlayer() {
    this.scene.physics.world.bounds.setPosition(this.scene.cameras.main.worldView.x, 0);

    if (this.getBody().position.x + this.getBody().width / 2 > this.scene.cameras.main.midPoint.x) {
      this.scene.cameras.main.startFollow(this);
    }
  }
}
