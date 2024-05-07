import { EventBus } from "../EventBus"
import { Scene } from "phaser"
import GameController from "../GameController"
import Player from "../entities/Player"

export class Game extends Scene {
  controller: GameController

  constructor() {
    super("Game")
    this.controller = new GameController(this)
  }

  create() {
    this.controller.setBackground("background")
    this.controller.addPlayer(new Player(this))

    EventBus.emit("current-scene-ready", this)
  }

  changeScene() {
    this.scene.start("GameOver")
  }
}
