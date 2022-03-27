import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import singleGame from './SingleGame';
import MPGame from './Multiplayer';
import global from './Global';
import auth from './auth/auth';

export const store = configureStore({
	reducer: {
		singleGame,
		auth,
		global,
		MPGame,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
