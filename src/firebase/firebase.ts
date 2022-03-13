import { FirebasePath } from '../models';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from '../config';
import { getAuth, updateProfile } from 'firebase/auth';

export const updateDocument = async <T>(path: FirebasePath, id: string, data: T) => {
	const docRef = await doc(firestore, path, id);
	await updateDoc(docRef, {
		...data,
	});
	const response = await getDoc(docRef);
	if (response.exists()) {
		return response.data();
	}
};
export const updateAuthDocument = async (name: string, value: string) => {
	const auth = getAuth();

	if (auth.currentUser) {
		updateProfile(auth.currentUser, {
			[name]: value,
		}).catch((error) => {
			console.log(error);
		});
	}
};
