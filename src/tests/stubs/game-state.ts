import type { GameState } from "../../components/types"

export const caseUnderpopulation: Record<string, GameState> = {
  initial: [
    [1, 0, 1],
    [1, 0, 0],
  ],
  expected: [
    [0, 0, 0],
    [0, 0, 0],
  ],
}

export const caseOvercrowding: Record<string, GameState> = {
  initial: [
    [1, 1, 1],
    [1, 1, 1],
  ],
  expected: [
    [1, 0, 1],
    [1, 0, 1],
  ],
}

export const caseStayAlive: Record<string, GameState> = {
  initial: [
    [1, 1, 0],
    [1, 0, 1],
  ],
  expected: [
    [1, 1, 0],
    [1, 0, 0],
  ],
}
