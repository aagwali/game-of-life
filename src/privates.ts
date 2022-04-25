import type { CellState, GameState } from "./components/types"

const randomIntBetween = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generateArray = (count: number): number[] =>
  Array.from(Array(count).keys())

export const generateRandomGameState = (): GameState => {
  const rowCount = randomIntBetween(10, 20)
  const columnCount = randomIntBetween(10, 20)

  const gameState = generateArray(rowCount)
    .map(() => generateArray(columnCount))
    .map((row) => row.map(() => randomIntBetween(0, 1) as CellState))

  return gameState
}

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
): number =>
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
        return adjacentCellsSum === 2 || adjacentCellsSum === 3 ? 1 : 0
      } else {
        return adjacentCellsSum === 3 ? 1 : 0
      }
    })
  )

  return newGameState
}
