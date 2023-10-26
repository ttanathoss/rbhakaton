import { Physics } from "phaser";

export class Actor extends Physics.Arcade.Sprite {
  private collider!: any;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);

    scene.add.existing(this);
    scene.physics.add.existing(this);
  }

  collideWith(gameObject: any) {
    this.collider = this.scene.physics.add.collider(this, gameObject);
    return this;
  }

  protected getBody(): Physics.Arcade.Body {
    return this.body as Physics.Arcade.Body;
  }
}
