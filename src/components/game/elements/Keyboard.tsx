import styled from 'styled-components';

const alphabet = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];
const StyledKeyboard = styled.div`
	grid-area: keyboard;
	align-self: end;
	justify-self: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.5rem;
	width: 100%;
	max-width: 33rem;
	height: min-content;
	${({ theme }) => theme.shadow({ color: theme.black })};
	padding: 1rem;
	border-radius: ${({ theme }) => theme.radius[2]};

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.75rem 0;
	}
`;

const StyledLetter = styled.button<{ disabled: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.black};
	min-width: 2rem;
	min-height: 1.8rem;
	max-width: 2.2rem;
	max-height: 2.5rem;
	cursor: pointer;
	transition: all 0.2s;
	border-radius: ${({ theme }) => theme.radius[2]};

	:disabled {
		cursor: not-allowed;
		background-color: ${({ theme }) => theme.grey400};

		:active {
			background-color: ${({ theme }) => theme.grey400};
		}
	}

	:active {
		background-color: ${({ theme }) => theme.grey200};
	}
`;

export const Keyboard = ({ onClick, letters }: { letters: Array<string>; onClick: (letter: string) => void }) => {
	const usedLetterHandler = (letter: string) => {
		return letters?.includes(letter);
	};

	return (
		<StyledKeyboard>
			{alphabet.map((letter) => {
				return (
					<StyledLetter type="button" disabled={usedLetterHandler(letter)} key={letter} onClick={() => onClick(letter)}>
						{letter}
					</StyledLetter>
				);
			})}
		</StyledKeyboard>
	);
};
