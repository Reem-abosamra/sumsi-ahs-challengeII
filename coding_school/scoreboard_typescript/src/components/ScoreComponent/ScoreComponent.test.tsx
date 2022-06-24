import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import ScoreComponent from "./ScoreComponent"

test("displays the inital score of '0'", () => {
  render(<ScoreComponent />)
  const scoreDisplay = screen.getByTestId("score-display")
  expect(scoreDisplay).toHaveTextContent("0")
})

test('displays "1" after increment button is pressed', () => {
  render(<ScoreComponent />)
  const scoreDisplay = screen.getByTestId("score-display")
  const incrementButton = screen.getByTestId("increment-button")
  fireEvent.click(incrementButton)
  expect(scoreDisplay).toHaveTextContent("1")
})

test('displays "0" after idecrement button is pressed while score is "1"', () => {
  render(<ScoreComponent score={1} />)
  const scoreDisplay = screen.getByTestId("score-display")
  const decrementButton = screen.getByTestId("decrement-button")
  expect(scoreDisplay).toHaveTextContent("1")
  fireEvent.click(decrementButton)
  expect(scoreDisplay).toHaveTextContent("0")
})

test("does not decrement below 0", () => {
  render(<ScoreComponent />)
  const scoreDisplay = screen.getByTestId("score-display")
  const decrementButton = screen.getByTestId("decrement-button")
  fireEvent.click(decrementButton)
  expect(scoreDisplay).toHaveTextContent("0")
})
