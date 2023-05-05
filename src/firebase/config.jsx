// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD5YTlhnq4al0ItXfyxuFoIfha9js_Czo",
  authDomain: "jdr-assist.firebaseapp.com",
  projectId: "jdr-assist",
  storageBucket: "jdr-assist.appspot.com",
  messagingSenderId: "603910308368",
  appId: "1:603910308368:web:8365c5dc10006256700095",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, getFirestore, collection, addDoc, getDocs };
