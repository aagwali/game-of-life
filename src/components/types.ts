export type CellState = 0 | 1

export type GameState = CellState[][]

export type GameContentProps = {
  gameState: GameState
}
