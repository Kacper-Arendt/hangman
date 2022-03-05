import styled, { css } from "styled-components";

const StyledHangman = styled.div`
  div {
    position: absolute;
  }
`;

const Head = styled.div`
  top: 20%;
  left: 55%;
  width: 3rem;
  height: 5rem;
  border-radius: 59% 41% 53% 47% / 62% 55% 45% 38%;
  border: 3px solid black;
  transform: rotate(0.1turn);
  background: #fff;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 2rem;
    height: 3rem;
  }
`;
const Corpus = styled.div`
  top: 33%;
  left: 55%;
  width: 0.6rem;
  height: 21%;
  background-color: black;
  border-radius: 50%/100px 100px 110px 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
`;

const Arms = css`
  top: 33%;
  height: 25%;
  width: 35%;
  border: 0.3rem solid;
  border-color: black transparent transparent transparent;
  border-radius: 4.3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 41%;
    height: 20%;
    width: 25%;
  }
`;

const LeftArm = styled.div`
  ${Arms};
  left: 47%;
  transform: rotate(-0.2turn);
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 46%;
  }
`;
const RightArm = styled.div`
  ${Arms};
  left: 30%;
  transform: rotate(0.2turn);
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 41%;
  }
`;

const Legs = css`
  top: 53%;
  height: 20%;
  width: 30%;
  border: 0.3rem solid;
  border-color: black transparent transparent transparent;
  border-radius: 2.3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 22%;
    top: 53%;
  }
`;

const RightLeg = styled.div`
  ${Legs};
  left: 48%;
  transform: rotate(-0.2turn);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 48%;
  }
`;
const LeftLeg = styled.div`
  ${Legs};
  left: 34%;
  transform: rotate(0.2turn);
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: 43%;
  }
`;
const Rope = styled.div`
  top: 18%;
  left: 55%;
  height: 18%;
  width: 0.3rem;
  background: black;
`;

export const Hangman = () => (
  <StyledHangman>
    <Head />
    <Corpus />
    <LeftArm />
    <RightArm />
    <RightLeg />
    <LeftLeg />
    <Rope />
  </StyledHangman>
);
