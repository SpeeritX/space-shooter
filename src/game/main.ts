import { Boot } from "./scenes/Boot"
import { Game as GameScene } from "./scenes/Game"
import { MainMenu } from "./scenes/MainMenu"
import { Game, AUTO } from "phaser"
import { Preloader } from "./scenes/Preloader"

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
  type: AUTO,
  width: 1024,
  height: 768,
  parent: "game-container",
  backgroundColor: "#028af8",
  scene: [Boot, Preloader, MainMenu, GameScene],
  physics: {
    default: "matter",
    matter: {
      gravity: { x: 0, y: 0 },
      debug: false,
    },
  },
}

const StartGame = (parent: string) => {
  return new Game({ ...config, parent })
}

export default StartGame
