import React from "react"
import { render, screen } from "@testing-library/react"
import PlayerRow from "./PlayerRow"

test("the player row displays the correct name", () => {
  const name = "Hugo"
  render(
    <PlayerRow
      playerName={name}
      index={0}
      deletePlayer={jest.fn()}
    />,
  )
  const playerRow = screen.getByTestId("player-row-0")
  expect(playerRow).toHaveTextContent(name)
})
