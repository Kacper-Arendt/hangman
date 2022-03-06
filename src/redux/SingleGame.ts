import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EndMessage, GameStatus, StartGame } from '../models';

const initialState = {
	lives: 7,
	status: GameStatus.idle,
	message: null,
	typedLetters: [],
	hiddenWord: [],
	score: 0,
} as StartGame;

export const singleGame = createSlice({
	name: 'singleGame',
	initialState,
	reducers: {
		startGame: (state, action: PayloadAction<string>) => {
			return {
				...state,
				hiddenWord: Array.from(action.payload.toUpperCase()),
				status: GameStatus.during,
			};
		},
		addLetter: (state, action: PayloadAction<string>) => {
			!state.hiddenWord.includes(action.payload) && state.lives--;
			state.typedLetters = [...state.typedLetters, action.payload];
		},
		changeStatus: (state, action: PayloadAction<GameStatus>) => {
			state.status = action.payload;
		},
		endGame: (state, action: PayloadAction<EndMessage>) => {
			state.status = GameStatus.end;
			state.message = action.payload.message;
			state.score = action.payload.score;
		},
		restartGame: () => initialState,
	},
});

export const { startGame, endGame, addLetter, changeStatus, restartGame } = singleGame.actions;

export default singleGame.reducer;
