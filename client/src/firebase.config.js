// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn2GD8StHtFARCe7SVl89ijhNBvGS4GMo",
  authDomain: "gpt-clone-326ef.firebaseapp.com",
  projectId: "gpt-clone-326ef",
  storageBucket: "gpt-clone-326ef.appspot.com",
  messagingSenderId: "817127780721",
  appId: "1:817127780721:web:e8a320112a1c3a1f4006d0",
  measurementId: "G-F7LG66CM8Q"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const goggleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export { auth, goggleAuthProvider, db };