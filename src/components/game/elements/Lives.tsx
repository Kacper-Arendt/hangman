import { AiFillHeart } from 'react-icons/ai';
import styled from 'styled-components';

const StyledLives = styled.div<{ lives: number }>`
	grid-area: lives;
	display: flex;
	column-gap: 0.5rem;
	justify-self: end;

	svg {
		font-size: 1.75rem;
		fill: ${({ theme }) => theme.danger};
		transition: all 0.4s;

		:nth-of-type(n + ${({ lives }) => lives}) {
			fill: ${({ theme }) => theme.grey400};
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		flex-wrap: wrap;
		svg {
			font-size: 1rem;
		}
	}
`;

export const Lives = ({ lives }: { lives: number }) => {
	const number = [0, 1, 2, 3, 4, 5, 6];
	return (
		<StyledLives lives={lives + 1}>
			{number.map((el) => {
				return <AiFillHeart key={el} />;
			})}
		</StyledLives>
	);
};
