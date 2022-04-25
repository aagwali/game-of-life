import { setNextGeneration } from "../privates"
import { caseOvercrowding, caseUnderpopulation } from "./stubs/game-state"

test("Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.", () => {
  const newGameState = setNextGeneration(caseUnderpopulation.initial)

  expect(newGameState).toEqual(caseUnderpopulation.expected)
})

test("Any live cell with more than three live neighbours dies, as if by overcrowding.", () => {
  const newGameState = setNextGeneration(caseOvercrowding.initial)

  expect(newGameState).toEqual(caseOvercrowding.expected)
})

export {}
