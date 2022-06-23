import styled from "styled-components";

const RowContainer = styled.div`
  height: 8rem;
  display: flex;
  background-color: #1985a1;
  margin-bottom: 1rem;
  border-radius: 1rem;
  justify-content: space-between;
  overflow: hidden;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child {
      width: 4rem;
    }

    &:nth-child(2) {
      flex-grow: 1;
      justify-content: flex-start;
      padding-left: 1rem;
      padding-right: 4rem;
      width: 60%;
    }

    &:last-child {
      width: 14rem;
      display: flex;
      justify-content: space-around;
    }
  }
`;

export default RowContainer;