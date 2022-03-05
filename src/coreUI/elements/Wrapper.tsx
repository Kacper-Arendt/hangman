import styled from "styled-components";
import { ReactNode } from "react";

import { Logo } from "coreUI";

interface Props {
  children: ReactNode;
}

const StyledLogo = styled(Logo)`
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

const Content = styled.div`
  max-width: 66rem;
  width: 100%;
  height: 38rem;
  background: radial-gradient(50% 50% at 50% 50%, #fff 0%, #eeeff0 100%);
  border-radius: ${({ theme }) => theme.radius[2]};
  border: 1px solid ${({ theme }) => theme.grey500};
  ${({ theme }) => theme.shadow({})};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.grey100});
  padding: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.5rem;
  }
`;

export const Wrapper = ({ children }: Props) => (
  <Container>
    <StyledLogo />
    <Content>{children}</Content>
  </Container>
);
