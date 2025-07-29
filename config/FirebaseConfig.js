// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCsxAsRtunQZJc_rrJyOd7DVuiG1No-484",
	authDomain: "a4-mobile.firebaseapp.com",
	projectId: "a4-mobile",
	storageBucket: "a4-mobile.firebasestorage.app",
	messagingSenderId: "606044650437",
	appId: "1:606044650437:web:d2763b059655efb73ae9ac",
	measurementId: "G-RHS153MT2W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
