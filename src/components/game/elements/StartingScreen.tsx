import { Button } from '../../../coreUI';
import styled from 'styled-components';
import { GameStatus } from '../../../models';

const Wrapper = styled.div`
	position: absolute;

	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.transparentize({ amount: 0.75, color: theme.black })};
	z-index: 3;
`;

interface Props {
	onClick: () => void;
	status: GameStatus;
}

export const StartingScreen = ({ onClick, status }: Props) => {
	const screenHandler = () => {
		switch (status) {
			case GameStatus.end:
				return 'New Game';
			default:
				return 'Start Game';
		}
	};

	if (status === GameStatus.during) return null;

	return (
		<Wrapper>
			<Button onClick={onClick} value={screenHandler()} variant="black" />
		</Wrapper>
	);
};
