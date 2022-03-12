import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../config';
import { FirebasePath } from '../models';

interface userData {
	id: string;
	email: string;
	displayName: string;
	photoURL?: string | null;
}

export const generateUserDoc = async ({ id, email, displayName, photoURL }: userData) => {
	try {
		const docRef = doc(firestore, FirebasePath.users, id);
		const snapshot = await getDoc(docRef);
		if (!snapshot.exists()) {
			await setDoc(docRef, { id, email, displayName, photoURL });
		}
	} catch (e: any) {
		console.log(e);
	}
};
