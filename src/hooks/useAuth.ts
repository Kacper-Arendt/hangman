import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { firebaseAuth } from '../config/Firebase';
import { useGetDoc } from './useGetDoc';
import { FirebasePath } from '../models';
import { addUser, logout, setIsAuth, useAppDispatch, useAppSelector } from '../redux';

interface User {
	email: string;
	displayName: string;
	photoURL?: string;
}

export const useAuth = () => {
	const { authenticated } = useAppSelector((state) => state.auth);
	const { setId, state } = useGetDoc<User>({ path: FirebasePath.users });
	const dispatch = useAppDispatch();

	useEffect(() => {
		onAuthStateChanged(firebaseAuth, (user: any) => {
			if (user && !authenticated) {
				setId(user.uid);
				dispatch(setIsAuth(true));
			}
			if (!user && !authenticated) {
				dispatch(logout());
			}
		});
	}, [authenticated, dispatch, setId, state.response]);

	useEffect(() => {
		if (state.response) {
			dispatch(addUser(state.response));
		}
	}, [dispatch, state.response, authenticated]);
};
