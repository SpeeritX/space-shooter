class Player {
  player: Phaser.Physics.Matter.Sprite

  constructor(private scene: Phaser.Scene) {
    scene.events.on("update", this.update, this)
    this.player = scene.matter.add.sprite(100, 450, "player")
    this.player.setFrictionAir(0.1)

    this.player.setBounce(0.2)
  }

  update() {
    const cursors = this.scene.input.keyboard?.createCursorKeys()
    if (!cursors) return
    if (cursors.left.isDown) {
      this.player.setVelocityX(-16)
    }
    if (cursors.right.isDown) {
      this.player.setVelocityX(16)
    }
    if (cursors.up.isDown) {
      this.player.setVelocityY(-16)
    }
    if (cursors.down.isDown) {
      this.player.setVelocityY(16)
    }
  }
}

export default Player
