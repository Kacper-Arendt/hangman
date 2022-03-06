import styled, { css } from 'styled-components';

const StyledHangman = styled.div<{ lives: number }>`
	position: relative;
	width: 150px;
	height: 250px;

	div {
		position: absolute;
		opacity: 0;
		transition: all 1s;

		:nth-last-of-type(n + ${({ lives }) => lives}) {
			opacity: 100%;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 100px;
		height: 150px;
	}
`;

const Rope = styled.div`
	inset: 0 50% auto;
	height: 18%;
	width: 0.3rem;
	background: black;
`;

const Head = styled.div`
	inset: 3% 50% auto;
	width: 3rem;
	height: 5rem;
	border-radius: 59% 41% 53% 47% / 62% 55% 45% 38%;
	border: 3px solid black;
	background: #fff;
	z-index: 2;
	transform: rotate(0.05turn);

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 2rem;
		height: 3rem;
	}
`;

const Corpus = styled.div`
	inset: 30% 50% auto;
	width: 2.5rem;
	height: 7rem;
	border: 5px solid black;
	background: #fff;
	z-index: 1;
	border-radius: 50%/100px 100px 10px 50px;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 5rem;
		left: 40%;
	}
`;

const Arms = css`
	inset: 35% 50% auto;
	height: 6.5rem;
	width: 7rem;
	border: 0.3rem solid;
	border-color: black transparent transparent transparent;
	border-radius: 4.3rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 3.5rem;
		width: 5rem;
	}
`;

const LeftArm = styled.div`
	${Arms};
	left: 35%;
	transform: rotate(-0.2turn);
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		left: 20%;
	}
`;

const RightArm = styled.div`
	${Arms};
	left: 20%;
	transform: rotate(0.2turn);
`;

const Legs = css`
	top: 75%;
	height: 5rem;
	width: 8rem;
	border: 0.3rem solid;
	border-color: black transparent transparent transparent;
	border-radius: 3rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 5rem;
		height: 4rem;
	}
`;

const RightLeg = styled.div`
	${Legs};
	left: 15%;
	transform: rotate(0.22turn);
`;

const LeftLeg = styled.div`
	${Legs};
	left: 33%;
	transform: rotate(-0.22turn);
`;

export const Hangman = ({ lives }: { lives: number }) => {
	return (
		<div>
			<StyledHangman lives={lives}>
				<Head />
				<Corpus />
				<LeftArm />
				<RightArm />
				<RightLeg />
				<LeftLeg />
				<Rope />
			</StyledHangman>
		</div>
	);
};
