import { FunctionComponent, ReactNode } from "react"
import styled from "styled-components"
import RowContainer from "../RowContainer/RowContainer"
import ScoreComponent from "../ScoreComponent/ScoreComponent"

type PlayerRowProps = {
  playerName: string
  index: number
  deletePlayer: (index: number) => void
}

const PlayerRow: FunctionComponent<PlayerRowProps> = ({
  playerName,
  index,
  deletePlayer,
}) => {
  return (
    <RowContainer as="li" data-testid={`player-row-${index}`}>
      <DeleteButton
        onClick={() => {
          deletePlayer(index)
        }}
      >
        X
      </DeleteButton>
      <div>
        <span data-testid={`player-${index}`}>{playerName}</span>
      </div>
      <ScoreComponent />
    </RowContainer>
  )
}

export default PlayerRow

const DeleteButton = styled.div`
  cursor: pointer;
  user-select: none;
  transition: background-color 350ms ease;
  width: 4rem;
  background-color: #fe5f55;
  &:hover {
    background-color: #b70d01;
  }
`
