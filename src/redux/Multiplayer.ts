import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StartMPGame, MPGameStatus } from '../models';

const initialState = {
	players: [],
	gameId: null,
	admin: null,
	isOpen: true,
	status: MPGameStatus.idle,
	message: null,
	hiddenWord: [],
} as StartMPGame;

export const MPGame = createSlice({
	name: 'MPGame',
	initialState,
	reducers: {
		addGameId: (state, action: PayloadAction<{ gameId: string }>) => {
			state.gameId = action.payload.gameId;
		},
		startMultiplayer: (state, action: PayloadAction<StartMPGame>) => {
			return {
				...state,
				...action.payload,
			};
		},
		addPlayerMoves: (state, action: PayloadAction<{ letter: string; playerId: string }>) => {
			const player = state.players.find((el) => el.id === action.payload.playerId);

			if (player) {
				if (!state.hiddenWord.includes(action.payload.letter)) {
					player.lives--;
				}
				player.typedLetters = [...player.typedLetters, action.payload.letter];
			}
		},
		changePlayerStatus: (state, action: PayloadAction<{ status: MPGameStatus; playerId: string; score?: number }>) => {
			const player = state.players.find((el) => el.id === action.payload.playerId);
			if (player) {
				player.status = action.payload.status;
				if (action.payload.score) {
					player.status = action.payload.status;
				}
			}
		},
		changeStatusMP: (state, action: PayloadAction<MPGameStatus>) => {
			state.status = action.payload;
		},
		restartMultiplayer: () => initialState,
	},
});

export const { startMultiplayer, changeStatusMP, restartMultiplayer, addPlayerMoves, addGameId, changePlayerStatus } =
	MPGame.actions;

export default MPGame.reducer;
