import { FormEvent, FunctionComponent, useState } from "react"
import styled from "styled-components"
import PlayerRow from "./components/PlayerRow/PlayerRow"
import RowContainer from "./components/RowContainer/RowContainer"

const App: FunctionComponent = () => {
  const [playerState, setPlayerState] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState("")

  const deletePlayer = (index: number) => {
    const newPlayerState = playerState.filter(
      (_, i) => i !== index,
    )
    setPlayerState(newPlayerState)
  }

  const handleAddPlayer = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setPlayerState([...playerState, currentInput])
    setCurrentInput("")
  }

  return (
    <main className="my-40 mx-auto w-1/2 rounded-2xl border-4 border-[#1985a1] bg-[#46494c] p-8 text-center">
      <h1>Scoreboard</h1>
      <ul>
        {playerState.map((player, index) => (
          <PlayerRow
            key={index}
            playerName={player}
            index={index}
            deletePlayer={deletePlayer}
          />
        ))}
      </ul>
      <RowContainer
        as="form"
        data-testid="playerName-form"
        onSubmit={handleAddPlayer}
      >
        <div />
        <div>
          <StyledInput
            type="text"
            value={currentInput}
            placeholder="Enter your name"
            onChange={(event) =>
              setCurrentInput(event.target.value)
            }
            data-testid="playerName-input"
          />
        </div>
        <StyledButton type="submit">
          <span>Hinzufügen</span>
        </StyledButton>
      </RowContainer>
    </main>
  )
}

export default App

const StyledButton = styled.button`
  cursor: pointer;
  user-select: none;
  transition: background-color 350ms ease;
  background-color: #0cca4a;
  border: none;
`

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 5px solid #dcdcdd;
  width: 100%;
  padding: 0.4rem 0px;
  font-size: 1.2rem;
  color: #dcdcdd;
  padding: 1rem;

  &::placeholder {
    color: #dcdcdd;
  }

  &:focus {
    outline-color: #dcdcdd;
  }
`

const AppContainer = styled.main`
  border: 4px solid #1985a1;
  margin: 10rem auto;
  width: 50%;
  background-color: #46494c;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
`
