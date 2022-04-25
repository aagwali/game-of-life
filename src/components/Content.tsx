import { useState } from "react"

import { Button, VStack } from "@chakra-ui/react"

import { generateRandomGameState } from "../privates"

import type { GameContentProps } from "./types"

const GameContent = ({ gameState }: GameContentProps) => {
  const [currentGameState, setCurrentGameState] = useState(gameState)

  return (
    <VStack spacing={12}>
      <Button
        onClick={() => setCurrentGameState(generateRandomGameState())}
        colorScheme={"blue"}
        children={"Generate"}
      />
    </VStack>
  )
}

export default GameContent
