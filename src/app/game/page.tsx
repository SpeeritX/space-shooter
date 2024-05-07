"use client"

import dynamic from "next/dynamic"
const DynamicComponentWithNoSSR = dynamic(() => import("@/src/game/Game"), {
  ssr: false,
})

export default function GameContainer() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  )
}
