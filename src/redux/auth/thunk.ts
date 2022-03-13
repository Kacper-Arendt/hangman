import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseAuth } from '../../config';
import { loginPayload } from './auth';
import { generateUserDoc, updateDocument } from '../../firebase';
import { FirebasePath } from '../../models';

// PROVIDERS
const provider = new GoogleAuthProvider();

export const loginWithGoogle = createAsyncThunk('loginWithGoogle', async (): Promise<loginPayload | undefined> => {
	try {
		const request = await signInWithPopup(firebaseAuth, provider);
		if (request) {
			const { email, displayName, photoURL, uid } = request.user;
			if (email && displayName) {
				await generateUserDoc({ id: uid, email, displayName, photoURL });
			}
			return { email, displayName, photoURL, id: uid } as loginPayload;
		}
	} catch (error) {
		return error;
	}
});

export const loginWithEmailAndPassword = createAsyncThunk(
	'loginWithCredentials',
	async ({ email, password }: { email: string; password: string }, thunkAPI): Promise<loginPayload | undefined> => {
		try {
			const response = await signInWithEmailAndPassword(firebaseAuth, email, password);
			if (response) {
				const { email, displayName, photoURL, uid } = response.user;
				return { email, displayName, photoURL, id: uid } as loginPayload;
			}
		} catch (error) {}
	},
);

export const logout = createAsyncThunk('logout', async (_, thunkAPI) => {
	try {
		await signOut(firebaseAuth);
	} catch (error) {
		return thunkAPI.rejectWithValue({ error: error.message });
	}
});

export const updateData = createAsyncThunk(
	'updateData',
	async ({ path, id, data }: { path: FirebasePath; id: string; data: any }, thunkAPI) => {
		try {
			const response = await updateDocument(path, id, data);
			if (response) {
				return data;
			}
		} catch (error) {}
	},
);
