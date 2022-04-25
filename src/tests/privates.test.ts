import { generateRandomGameState, setNextGeneration } from "../privates"
import { caseBecomeAlive, caseOvercrowding, caseStayAlive, caseUnderpopulation } from "./stubs/game-state"

test("Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.", () => {
  const newGameState = setNextGeneration(caseUnderpopulation.initial)

  expect(newGameState).toEqual(caseUnderpopulation.expected)
})

test("Any live cell with more than three live neighbours dies, as if by overcrowding.", () => {
  const newGameState = setNextGeneration(caseOvercrowding.initial)

  expect(newGameState).toEqual(caseOvercrowding.expected)
})

test("Any live cell with two or three live neighbours lives on to the next generation.", () => {
  const newGameState = setNextGeneration(caseStayAlive.initial)

  expect(newGameState).toEqual(caseStayAlive.expected)
})

test("Any dead cell with exactly three live neighbours becomes a live cell.", () => {
  const newGameState = setNextGeneration(caseBecomeAlive.initial)

  expect(newGameState).toEqual(caseBecomeAlive.expected)
})

test("Generated game state produce an array of array with only expected values.", () => {
  const randomGameState = generateRandomGameState()

  expect(Array.isArray(randomGameState)).toBeTruthy()

  const allRowsAreArray = randomGameState
    .map((row) => Array.isArray(row))
    .every(Boolean)

  expect(allRowsAreArray).toBeTruthy()

  const allValuesAreCellState = randomGameState
    .map((row) => row.map((value) => value === 0 || value === 1))
    .flat()
    .every(Boolean)

  expect(allValuesAreCellState).toBeTruthy()
})

export {}
