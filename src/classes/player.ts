import { Scene, Types } from "phaser";
import { Actor } from "./actor";

export class Player extends Actor {
  constructor(scene: Scene) {
    super(scene, 16, 400, "player");
    this.setCollideWorldBounds(true);

    this.initAnimations();

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
    if (input.up.isDown && this.getBody().onFloor()) {
      this.setVelocityY(-400);
      this.play("jump", true);
    }
  }

  private reFollowPlayer() {
    this.scene.physics.world.bounds.setPosition(this.scene.cameras.main.worldView.x, 0);

    if (this.getBody().position.x + this.getBody().width / 2 > this.scene.cameras.main.midPoint.x) {
      this.scene.cameras.main.startFollow(this);
    }
  }

  private initAnimations() {
    this.scene.anims.create({
      key: "jump",
      frames: this.scene.anims.generateFrameNames("player", {
        prefix: "move-up-",
        end: 3,
      }),
      frameRate: 4,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "run",
      frames: this.scene.anims.generateFrameNames("player", {
        prefix: "move-right-",
        end: 3,
      }),
      frameRate: 4,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "idle",
      frames: this.scene.anims.generateFrameNames("player", {
        prefix: "stay-down-",
        end: 1,
      }),
      frameRate: 4,
      repeat: -1,
    });
  }

  die() {
    this.setVelocity(0, 250);
  }
}
