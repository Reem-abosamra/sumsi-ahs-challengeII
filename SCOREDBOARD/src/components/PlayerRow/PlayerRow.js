import styled from "styled-components";
import RowContainer from "../RowContainer/RowContainer";
import ScoreComponent from "../ScoreComponent/ScoreComponent";

const PlayerRow = (props) => {
  return (
    <RowContainer as="li">
      <DeleteButton>
        X
      </DeleteButton>
      <div>
        <span>{props.playerName}</span>
      </div>
      <ScoreComponent />
    </RowContainer>
  );
};

export default PlayerRow;

const DeleteButton = styled.div`
    cursor: pointer;
    user-select: none;
    transition: background-color 350ms ease;
    width: 4rem;
    background-color: #fe5f55;
    &:hover {
        background-color: #B70D01;
    }
`