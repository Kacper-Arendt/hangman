import styled from 'styled-components';
import { Gallows, Keyboard, Lives, Word } from '../../game/elements';
import { addPlayerMoves, changePlayerStatus, changeStatusMP, useAppDispatch, useAppSelector } from '../../../redux';
import { useEffect } from 'react';
import { GameStatus, MPGameStatus } from '../../../models';
import { Opponent } from '../elements/Opponent';

const StyledWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: min-content repeat(2, 1fr);
	grid-template-rows: min-content 1fr repeat(2, min-content);
	grid-template-areas:
		'. lives  lives'
		'game  info info'
		'game  word .'
		'keyboard  keyboard keyboard';
	width: 100%;
	height: 100%;
	padding: 1rem;
	gap: 1rem;

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: min-content 1fr repeat(2, min-content);
		grid-template-areas:
			'. lives'
			'game opponent'
			'word word'
			'keyboard keyboard';
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.5rem;
	}
`;

export const Game = () => {
	const { id } = useAppSelector((state) => state.auth);
	const { players, hiddenWord } = useAppSelector((state) => state.MPGame);
	const player = players.find((p) => p.id === id);
	const dispatch = useAppDispatch();

	const playerMoveHandler = (letter: string) => {
		if (id) {
			dispatch(addPlayerMoves({ playerId: id, letter: letter }));
		}
	};
	useEffect(() => {
		if (player && !player.lives && GameStatus.during && id) {
			dispatch(
				changePlayerStatus({
					playerId: id,
					status: MPGameStatus.end,
					score: 0,
				}),
			);
		}
	}, [player?.lives, dispatch, hiddenWord, player, id]);

	useEffect(() => {
		if (player && id && GameStatus.during && hiddenWord.every((elem) => player.typedLetters.includes(elem))) {
			dispatch(
				changePlayerStatus({
					playerId: id,
					status: MPGameStatus.end,
					score: 3,
				}),
			);
		}
	}, [dispatch, hiddenWord, player?.typedLetters]);

	useEffect(() => {
		if (players.every((player) => player.status === MPGameStatus.end)) {
			dispatch(changeStatusMP(MPGameStatus.end));
		}
	}, [dispatch, players]);

	return (
		<>
			{player && (
				<StyledWrapper>
					<Gallows lives={player.lives} />
					<Keyboard
						letters={player.typedLetters}
						onClick={(letter) => {
							playerMoveHandler(letter);
						}}
					/>
					<Word typedLetters={player.typedLetters} hiddenWord={hiddenWord} />
					<Lives lives={player.lives} />
					<Opponent />
				</StyledWrapper>
			)}
		</>
	);
};
