import styled from 'styled-components';
import { useAppSelector } from '../../../redux';

const StyledWord = styled.div`
	grid-area: word;
	align-self: end;
	display: flex;
	justify-self: center;
	column-gap: 0.3rem;
	width: 100%;
	max-width: 33rem;
	margin: 1rem;
	padding: 0 1rem;
`;
const StyledLetter = styled.span`
	flex: 1;
	font-size: 1.5rem;
	text-align: center;
	height: min-content;
	border-bottom: 2px solid ${({ theme }) => theme.grey300};
	text-transform: uppercase;
	margin-top: auto;
`;

export const Word = () => {
	const { hiddenWord, typedLetters } = useAppSelector((state) => state.singleGame);

	const showLetter = (letter: string) => {
		if (typedLetters && typedLetters.includes(letter)) return letter;
	};

	return (
		<StyledWord>
			{hiddenWord &&
				hiddenWord.map((letter, key) => {
					return <StyledLetter key={letter + key}>{showLetter(letter)}</StyledLetter>;
				})}
		</StyledWord>
	);
};
