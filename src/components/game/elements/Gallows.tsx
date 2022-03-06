import styled, { css, keyframes } from 'styled-components';
import { Hangman } from '../../../coreUI';

const StyledWrapper = styled.div`
	grid-area: game;
	width: 23rem;
	height: 100%;
	position: relative;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 15rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 10rem;
	}
`;

const Floor = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 50%;
	height: 1rem;
	background-color: ${({ theme }) => theme.black};
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 40%;
		height: 0.5rem;
	}
`;
const Column = styled.span`
	position: absolute;
	bottom: 0;
	left: 10%;
	width: 1rem;
	height: 80%;
	background-color: ${({ theme }) => theme.black};
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 70%;
		width: 0.5rem;
	}
`;
const Arm = styled.span`
	position: absolute;
	bottom: 80%;
	left: 10%;
	width: 50%;
	height: 1rem;
	background-color: ${({ theme }) => theme.black};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		bottom: 70%;
		height: 0.5rem;
	}
`;
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const StyledHangman = styled.div<{ isDead: boolean }>`
	position: absolute;
	top: 18%;
	left: 30%;
	${({ isDead }) =>
		isDead &&
		css`
			animation: ${rotate} 10s linear infinite;
		`};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		top: 30%;
		left: 22%;
	}
`;

export const Gallows = ({ lives }: { lives: number }) => {
	return (
		<StyledWrapper>
			<Floor />
			<Column />
			<Arm />
			<StyledHangman isDead={lives === 0}>
				<Hangman lives={lives + 1} />
			</StyledHangman>
		</StyledWrapper>
	);
};
