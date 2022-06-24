import renderer from "react-test-renderer"
import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import { createRenderer } from "react-dom/test-utils"

test("renders no player on start", () => {
  render(<App />)
  const playerRow = screen.queryByTestId("player-row-0")
  expect(playerRow).not.toBeInTheDocument()
})

test("adds a player on form submit", () => {
  const playerName = "Hansi"
  render(<App />)
  const playerNameInput = screen.getByTestId("playerName-input")
  fireEvent.change(playerNameInput, {
    target: { value: playerName },
  })
  const playerNameForm = screen.getByTestId("playerName-form")
  fireEvent.submit(playerNameForm)
  const playerRow = screen.getByTestId("player-row-0")
  expect(playerRow).toBeInTheDocument()
  expect(playerRow).toHaveTextContent(playerName)
})

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
