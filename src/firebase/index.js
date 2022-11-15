// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDqzHmb4tbutsNB-e48gW-QKKLuWY4ssNI',
	authDomain: 'ob-react-final.firebaseapp.com',
	projectId: 'ob-react-final',
	storageBucket: 'ob-react-final.appspot.com',
	messagingSenderId: '635547843277',
	appId: '1:635547843277:web:9c51900cf1e7faf4360784',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore();
