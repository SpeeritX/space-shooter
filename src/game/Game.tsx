import { useEffect, useLayoutEffect, useRef } from "react"
import StartGame from "./main"
import { EventBus } from "./EventBus"
const Game = () => {
  const game = useRef<Phaser.Game>()

  // Create the game inside a useLayoutEffect hook to avoid the game being created outside the DOM
  useLayoutEffect(() => {
    if (game.current === undefined) {
      game.current = StartGame("game-container")
    }

    return () => {
      if (game.current) {
        game.current.destroy(true)
        game.current = undefined
      }
    }
  }, [])

  useEffect(() => {
    EventBus.on("current-scene-ready", (currentScene: Phaser.Scene) => {
      console.log("currentScene", currentScene)
    })

    return () => {
      EventBus.removeListener("current-scene-ready")
    }
  }, [])

  return <div id="game-container"></div>
}

export default Game
