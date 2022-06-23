import { useState } from "react";
import styled from "styled-components";
import PlayerRow from "./components/PlayerRow/PlayerRow";
import RowContainer from "./components/RowContainer/RowContainer";

const App = () => {
  const [playerState, setPlayerState] = useState(["Hansi"]);
  const [currentInput, setCurrentInput] = useState("");

  return (
    <AppContainer>
      <h1>Scoreboard</h1>
      <ul>
        {playerState.map((player, index) => (
          <PlayerRow key={index} playerName={player} />
        ))}
      </ul>
      <RowContainer as="form">
        <div />
        <div>
          <StyledInput
            type="text"
            value={currentInput}
            placeholder="Enter your name"
            onChange={(event) => setCurrentInput(event.target.value)}
          />
        </div>
        <StyledButton
          onClick={(event) => {
            event.preventDefault();
            setPlayerState([...playerState, currentInput]);
            setCurrentInput("");
          }}
        >
          <span>Hinzufügen</span>
        </StyledButton>
      </RowContainer>
    </AppContainer>
  );
};

export default App;

const StyledButton = styled.button`
  cursor: pointer;
  user-select: none;
  transition: background-color 350ms ease;
  background-color: #0cca4a;
  border: none;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 4px solid #dcdcdd;
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
`;

const AppContainer = styled.main`
  border: 5px solid #1985a1;
  margin: 10rem auto;
  width: 50%;
  background-color: #46494c;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
`;
