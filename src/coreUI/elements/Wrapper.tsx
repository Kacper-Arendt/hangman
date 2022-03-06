import styled from 'styled-components';
import { ReactNode } from 'react';

import { Logo } from '../';

interface Props {
	children: ReactNode;
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.grey100};
	padding: 1rem;
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.2rem;
	}
`;

const Content = styled.div`
	max-width: 66rem;
	width: 100%;
	height: 38rem;
	max-height: 100vh;
	background: radial-gradient(50% 50% at 50% 50%, #fff 0%, #eeeff0 100%);
	border-radius: ${({ theme }) => theme.radius[2]};
	border: 1px solid ${({ theme }) => theme.grey500};
	${({ theme }) => theme.shadow({})};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100%;
		height: 100%;
	}
`;

export const Wrapper = ({ children }: Props) => (
	<Container>
		<Logo />
		<Content>{children}</Content>
	</Container>
);
