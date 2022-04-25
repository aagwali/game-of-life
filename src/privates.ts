import { CellState, GameState } from "./components/types"

const getCellAt = (
  [row, column]: [number, number],
  rowIndex: number,
  cellIndex: number,
  gameState: GameState
): CellState => {
  const targetedRow = gameState[rowIndex + row] ?? []
  const targetedCell = targetedRow[cellIndex + column] ?? 0
  return targetedCell
}

const adjacentsCoordinates: [number, number][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

const getAdjacentCellsSum = (
  rowIndex: number,
  cellIndex: number,
  gameState: GameState
) =>
  adjacentsCoordinates.reduce(
    (acc, adjacentCoordinates) =>
      acc + getCellAt(adjacentCoordinates, rowIndex, cellIndex, gameState),
    0
  )

export const setNextGeneration = (gameState: GameState): GameState => {
  const newGameState = gameState.map((row, rowIndex) =>
    row.map((cellState, cellIndex) => {
      const adjacentCellsSum = getAdjacentCellsSum(
        rowIndex,
        cellIndex,
        gameState
      )

      if (cellState) {
        return adjacentCellsSum < 2 ? 0 : 1
      }

      return 0
    })
  )

  return newGameState
}
