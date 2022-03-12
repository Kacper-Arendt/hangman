import { useEffect, useReducer, useState } from 'react';
import { FirebasePath } from '../models';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../config/Firebase';

export interface IState<T> {
	message?: string | null;
	loading: boolean;
	response: T | null;
}

export const initState = {
	loading: false,
	response: null,
	message: null,
};

export interface IResponse<T> {
	state: IState<T>;
	clearData: () => void;
	setId: (id: string) => void;
}

export const firebaseReducer = <T>(state: IState<T>, action: any) => {
	switch (action.type) {
		case 'CLEAR_STATE':
			return initState;
		case 'FETCH_INIT':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_SUCCESS':
			return {
				...state,
				loading: false,
				response: action.payload,
			};
		case 'FETCH_FAILURE':
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		default:
			throw new Error();
	}
};

export interface IConfig {
	path: FirebasePath;
}

export const useGetDoc = <T>({ path }: IConfig): IResponse<T | unknown> => {
	const [id, setId] = useState<null | string>(null);
	const [state, dispatch] = useReducer(firebaseReducer, initState);

	const clearData = () => {
		dispatch({ type: 'CLEAR_STATE' });
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				if (id) {
					dispatch({ type: 'FETCH_INIT' });
					const docRef = doc(firestore, path, id);
					const docSnap = await getDoc(docRef);
					if (docSnap.exists()) {
						return dispatch({ type: 'FETCH_SUCCESS', payload: await docSnap.data() });
					}
					dispatch({ type: 'FETCH_FAILURE', payload: 'User not found' });
				}
			} catch (error) {
				dispatch({ type: 'FETCH_FAILURE', payload: 'Something went wrong, Try again' });
			}
		};

		fetchData();
	}, [id, path]);

	return { setId, state, clearData };
};
