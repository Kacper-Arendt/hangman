import { initializeApp } from 'firebase/app';
import { initializeAuth, browserLocalPersistence, browserPopupRedirectResolver } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const app = initializeApp({
	apiKey: 'AIzaSyAwqpjBiqVgalNJgtaUhaBhjm8S8FPs-1I',
	authDomain: 'hangmanv1.firebaseapp.com',
	projectId: 'hangmanv1',
	storageBucket: 'hangmanv1.appspot.com',
	messagingSenderId: '130372095963',
	appId: '1:130372095963:web:37fb9de5633701540fa1fe',
	measurementId: 'G-NM5T9P1QCV',
});

export const firebaseAuth = initializeAuth(app, {
	persistence: browserLocalPersistence,
	popupRedirectResolver: browserPopupRedirectResolver,
});
export const firestore = getFirestore(app);
