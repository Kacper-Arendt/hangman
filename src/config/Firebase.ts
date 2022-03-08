// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAwqpjBiqVgalNJgtaUhaBhjm8S8FPs-1I',
	authDomain: 'hangmanv1.firebaseapp.com',
	projectId: 'hangmanv1',
	storageBucket: 'hangmanv1.appspot.com',
	messagingSenderId: '130372095963',
	appId: '1:130372095963:web:37fb9de5633701540fa1fe',
	measurementId: 'G-NM5T9P1QCV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
