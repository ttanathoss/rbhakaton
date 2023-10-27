import { Scene, Types } from "phaser";

export class Coin {
    private scene: any;
    private coins: any;

    constructor(scene: Scene) {
        this.scene = scene;
        this.coins = this.scene.physics.add.group({
            immovable: true,
            allowGravity: false
        });

        const coinSprites = this.scene.map.createFromObjects('items');
        for (const coin of coinSprites) {
            coin.setTexture('player')
                .setScale(1)
                .setOrigin(0)
                .setDepth(-1)
                .setDepth(1);
            this.coins.add(coin);
        }
        return this;
    }

    collideWith(gameObject: any) {
        this.scene.physics.add.overlap(this.coins, gameObject, this.collect, null, this);

        return this;
    }

    update() {
        for (const coin of this.coins.children.entries) {
            coin.play('rotate', true);
        }
    }

    collect() {
        for (const coin of this.coins.children.entries) {
            if (!coin.body.touching.none) {
                coin.body.setEnable(false);

                this.scene.tweens.add({
                    targets: coin,
                    ease: 'Power1',
                    scaleX: 0,
                    scaleY: 0,
                    duration: 200,
                    onComplete: () => coin.destroy()
                });
            }
        }
    }
}

export default Coin;