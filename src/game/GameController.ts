import { Scene } from "phaser"
import Player from "./entities/Player"

class GameController {
  player?: Player

  constructor(private scene: Scene) {}

  get gameWidth() {
    return this.scene.scale.width
  }

  get gameHeight() {
    return this.scene.scale.height
  }

  setBackground(texture: string) {
    // load texture and take the width and height
    const textureWidth = this.scene.textures.get(texture).getSourceImage().width
    const textureHeight = this.scene.textures
      .get(texture)
      .getSourceImage().height

    // calculate the number of tiles needed to fill the screen
    const columns = Math.ceil(this.gameWidth / textureWidth)
    const rows = Math.ceil(this.gameHeight / textureHeight)

    // add the tiles
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        this.scene.add
          .image(i * textureWidth, j * textureHeight, texture)
          .setOrigin(0)
      }
    }
  }

  addPlayer(player: Player) {
    this.player = player
  }
}

export default GameController
