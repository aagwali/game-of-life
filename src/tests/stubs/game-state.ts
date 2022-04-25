import type { GameState } from "../../components/types"

export const caseUnderpopulation: Record<string, GameState> = {
  initial: [
    [1, 0],
    [1, 0],
  ],
  expected: [
    [0, 0],
    [0, 0],
  ],
}
