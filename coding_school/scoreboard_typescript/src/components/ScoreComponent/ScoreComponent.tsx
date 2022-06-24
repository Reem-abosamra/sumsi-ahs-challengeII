import { FunctionComponent, useState } from "react"
import styled, { css } from "styled-components"

type ScoreComponentProps = {
  score?: number
}

const ScoreComponent: FunctionComponent<ScoreComponentProps> = ({
  score,
}) => {
  const [currentScore, setCurrentScore] = useState(score ?? 0)
  const isDisabled = Boolean(currentScore <= 0)

  return (
    <div>
      <StyledDecrementButton
        disabled={isDisabled}
        isDisabled={isDisabled}
        onClick={() => {
          setCurrentScore(currentScore - 1)
        }}
        data-testid="decrement-button"
      >
        -
      </StyledDecrementButton>
      <div style={{ flex: 1 }} data-testid="score-display">
        {currentScore}
      </div>
      <StyledIncrementButton
        onClick={() => {
          setCurrentScore(currentScore + 1)
        }}
        data-testid="increment-button"
      >
        +
      </StyledIncrementButton>
    </div>
  )
}

export default ScoreComponent

const scoreElementStyles = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

type StyledDecrementButtonProps = { isDisabled: boolean }

const StyledDecrementButton = styled.button<StyledDecrementButtonProps>`
  ${scoreElementStyles}
  cursor: pointer;
  user-select: none;
  transition: background-color 350ms ease;

  background-color: #fe5f55;
  width: 30%;
  border: none;

  &:hover {
    background-color: #b70d01;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
  cursor: not-allowed;
  background-color: darkgray;
  &:hover {
      background-color: darkgray;
    }
    `};
`

const StyledIncrementButton = styled.div`
  ${scoreElementStyles}
  cursor: pointer;
  user-select: none;
  transition: background-color 350ms ease;

  background-color: #0cca4a;
  width: 30%;

  &:hover {
    background-color: #088732;
  }
`
