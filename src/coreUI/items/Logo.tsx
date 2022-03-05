import styled from "styled-components";

export const StyledText = styled.span`
  font-family: ${({ theme }) => theme.fontMarker};
  font-size: 4rem;
  transform: rotate(-5deg);
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 3rem;
  }
`;
export const Logo = () => <StyledText>Hangman</StyledText>;
