import styled from "styled-components";
import { Hangman } from "components/game/Hangman";

const StyledWrapper = styled.div`
  width: 40%;
  height: 90%;
  border: 1px solid grey;
  margin: 1rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: auto;
    height: 50%;
  }
`;

const Floor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 1rem;
  background-color: black;
`;
const Column = styled.span`
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 1rem;
  height: 80%;
  background-color: black;
`;
const Arm = styled.span`
  position: absolute;
  bottom: 80%;
  left: 10%;
  width: 50%;
  height: 1rem;
  background-color: black;
`;

export const Gallows = () => {
  return (
    <StyledWrapper>
      <Floor />
      <Column />
      <Arm />
      <Hangman />
    </StyledWrapper>
  );
};
