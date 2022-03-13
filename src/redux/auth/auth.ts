import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { loginWithEmailAndPassword, loginWithGoogle, logout, updateData } from './thunk';

export interface AuthState {
	id: string | null;
	displayName: string | null;
	email: string | null;
	authenticated: boolean;
	error?: SerializedError;
	photoURL?: string | null;
}

const initialState: AuthState = {
	id: null,
	displayName: null,
	email: null,
	authenticated: false,
	error: undefined,
	photoURL: null,
};

export interface loginPayload {
	id: string;
	email: string;
	displayName: string;
	photoURL?: string;
	error?: SerializedError;
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.authenticated = true;
			state.id = action.payload.id;
			state.email = action.payload.email;
			state.displayName = action.payload.displayName;
			state.photoURL = action.payload?.photoURL;
		},
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.authenticated = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
			if (action.payload) {
				state.id = action.payload.id;
				state.displayName = action.payload?.displayName;
				state.email = action.payload.email;
				state.authenticated = true;
			}
		});
		builder.addCase(loginWithEmailAndPassword.rejected, (state, action) => {
			state.error = action.error;
		});
		// ---------->>>
		//LOGIN WITH GOOGLE
		builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
			if (action.payload) {
				state.id = action.payload.id;
				state.displayName = action.payload.displayName;
				state.email = action.payload.email;
				state.photoURL = action.payload?.photoURL;
				state.authenticated = true;
			}
		});
		builder.addCase(loginWithGoogle.rejected, (state, action) => {
			state.error = action.error;
		});
		// ---------->>>
		// LOGOUT
		builder.addCase(logout.fulfilled, (state) => {
			return initialState;
		});
		builder.addCase(logout.rejected, (state, action) => {
			state.error = action.error;
		});
		// ---------->>>
		// UPDATE DATA
		builder.addCase(updateData.fulfilled, (state, action) => {
			if (action.payload) {
				return {
					...state,
					...action.payload,
				};
			}
		});
		builder.addCase(updateData.rejected, (state, action) => {
			state.error = action.error;
		});
	},
});

export const { addUser, setIsAuth } = authSlice.actions;

export default authSlice.reducer;
