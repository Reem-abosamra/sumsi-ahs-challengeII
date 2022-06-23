import { useState } from "react";
import styled, { css } from "styled-components";

const ScoreComponent = () => {
    const [score, setScore] = useState(0)
  
    return (
    <div>
      <StyledDecrementButton
        disabled={Boolean(
          score <= 0
        )} onClick={() => {setScore(score - 1)}}
      >
        -
      </StyledDecrementButton>
      <div css={css`flex:1;`}>
        {score}
      </div>
      <StyledIncrementButton onClick={() => {setScore(score + 1)}}
      >
        +
      </StyledIncrementButton>
    </div>
  );
};

export default ScoreComponent;

const scoreElementStyles = css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDecrementButton = styled.div`
  ${scoreElementStyles}
  cursor: pointer;
  user-select: none;
  transition: background-color 350ms ease;

  background-color: #fe5f55;
  width: 30%;

  &:hover {
  background-color: #B70D01;
  }

  ${({ disabled }) => (
      disabled &&
      `
  cursor: not-allowed;
  background-color: darkgray;
  &:hover {
      background-color: darkgray;
    }
    `
    )};
`;

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
`;
