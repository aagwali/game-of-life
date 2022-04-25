import { setNextGeneration } from "../privates"
import { caseUnderpopulation } from "./stubs/game-state"

test("Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.", () => {
  const newGameState = setNextGeneration(caseUnderpopulation.initial)

  expect(newGameState).toEqual(caseUnderpopulation.expected)
})

export {}
