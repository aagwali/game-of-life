import { useEffect, useState } from "react"

import { Button, Grid, VStack } from "@chakra-ui/react"

import { generateRandomGameState, setNextGeneration } from "../privates"
import { CellItem } from "./styles"

import type { GameContentProps } from "./types"
const GameContent = ({ gameState }: GameContentProps) => {
  const [currentGameState, setCurrentGameState] = useState(gameState)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentGameState(setNextGeneration(currentGameState))
    }, 175)
    return () => clearTimeout(timer)
  }, [currentGameState])

  return (
    <VStack spacing={12}>
      <Button
        onClick={() => setCurrentGameState(generateRandomGameState())}
        colorScheme={"blue"}
        children={"Generate"}
      />
      <Grid
        templateColumns={`repeat(${currentGameState[0].length}, 1fr)`}
        gap={0.5}
      >
        {currentGameState.flat().map((cell, index) => (
          <CellItem key={index} status={cell} />
        ))}
      </Grid>
    </VStack>
  )
}

export default GameContent
