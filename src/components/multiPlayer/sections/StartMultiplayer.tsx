import styled from 'styled-components';
import { Button } from '../../../coreUI';
import { generateDoc } from '../../../firebase';
import { FirebasePath, MPGameStatus } from '../../../models';
import { addGameId, useAppDispatch, useAppSelector } from '../../../redux';
import { useNavigate } from 'react-router-dom';

const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StartMultiplayer = () => {
	const { displayName, photoURL, id } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const startGameHandler = async () => {
		const game = await generateDoc(FirebasePath.games, {
			players: [{ displayName, photoURL, id, typedLetters: [], score: 0, lives: 7, status: MPGameStatus.waiting }],
			admin: id,
			isOpen: true,
			status: MPGameStatus.waiting,
			hiddenWord: Array.from('apple'.toUpperCase()),
			message: 'Game created, waiting for opponent...',
		});
		dispatch(addGameId(game));
		navigate(game);
	};

	return (
		<StyledWrapper>
			<Button width="10rem" value="Start" variant="green" onClick={startGameHandler} />
		</StyledWrapper>
	);
};
