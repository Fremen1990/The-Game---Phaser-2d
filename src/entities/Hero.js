/// <reference path="../../typings/phaser.d.ts" />

import Phaser from 'phaser';

class Hero extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y, 'hero-run-sheet', 0);

        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)

        // this.player = this.physics.add.sprite(250, 300, 'hero-run-sheet'); // here we add hero object to the center of the screen

        this.anims.play('hero-running')  // this animate player with created animation with key 'hero-running'

        this.body.setCollideWorldBounds(true); // this means that player will not fall out of the screen, always with the boarders
        this.body.setSize(12, 40); // adjusting hero size boarder to the real body size
        this.body.setOffset(12, 23); /// offsetting boarder to correct pleace 
        this.body.setMaxVelocity(300, 400); // maximum acceleration control
        this.body.setDragX(500);

        this.keys = scene.cursorKeys;
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);


        if (this.keys.left.isDown) {
            this.body.setAccelerationX(-500);
            this.setFlipX(true);
            this.body.offset.x = 8;
        }
        else if (this.keys.right.isDown) {
            this.body.setAccelerationX(500);
            this.setFlipX(false);
            this.body.offset.x = 12;
        }
        else {
            this.body.setAccelerationX(0);
        }

        if (this.body.onFloor()) {
            this.canDoubleJump = false;
        }

        if (this.body.velocity.y > 0) {
            this.isJumping = false;
        }

        const didPressJump = Phaser.Input.Keyboard.JustDown(this.keys.up);

        if (didPressJump) {

            if (this.body.onFloor()) {
                this.isJumping = true;
                this.canDoubleJump = true;
                this.body.setVelocityY(-400);
            }
            else if (this.canDoubleJump) {
                this.isJumping = true;
                this.canDoubleJump = false;
                this.body.setVelocityY(-300);
            }
        }
        if (!this.keys.up.isDown && this.body.velocity.y < -150 && this.isJumping) {
            this.body.setVelocity(-150);
        }
    }
}

export default Hero;