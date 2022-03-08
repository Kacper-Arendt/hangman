import { useEffect } from 'react';
import styled from 'styled-components';
import { Gallows, Keyboard, Lives, Message, StartingScreen, Word } from './elements';
import { Wrapper } from '../../coreUI';
import { addLetter, endGame, startGame, useAppDispatch, useAppSelector } from '../../redux';
import { GameStatus } from '../../models';

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
			'game info'
			'word word'
			'keyboard keyboard';
	}
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 0.5rem;
	}
`;

export const Game = () => {
	const dispatch = useAppDispatch();
	const { status, lives, typedLetters, hiddenWord, message } = useAppSelector((state) => state.singleGame);
	const words: Array<string> = ['array', 'react', 'message', 'apple', 'programming'];

	useEffect(() => {
		if (!lives && GameStatus.during) {
			dispatch(
				endGame({
					score: 0,
					message: {
						type: 'danger',
						value: `Unfortunately, you didn't guess the word. The correct answer is`,
						content: hiddenWord.join(''),
					},
				}),
			);
		}
	}, [lives, dispatch, hiddenWord]);

	useEffect(() => {
		if (GameStatus.during && typedLetters.length >= 1 && hiddenWord.every((elem) => typedLetters.includes(elem))) {
			dispatch(endGame({ score: 2, message: { type: 'success', value: 'Cool! keep it up' } }));
		}
	}, [dispatch, hiddenWord, typedLetters]);

	const startGameHandler = () => {
		dispatch(startGame(words[Math.floor(Math.random() * words.length)]));
	};

	return (
		<Wrapper>
			<StyledWrapper>
				<StartingScreen status={status} onClick={() => startGameHandler()} />
				<Gallows lives={lives} />
				<Keyboard
					letters={typedLetters}
					onClick={(el) => {
						dispatch(addLetter(el));
					}}
				/>
				<Word />
				<Lives lives={lives} />
				{message && <Message type={message.type} value={message.value} content={message.content} />}
			</StyledWrapper>
		</Wrapper>
	);
};
