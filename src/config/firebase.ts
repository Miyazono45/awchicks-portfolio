// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6a60rjEOVKaAVcBgZfaALDqJxNdmSXrI",
  authDomain: "awchicks-portfolio.firebaseapp.com",
  projectId: "awchicks-portfolio",
  storageBucket: "awchicks-portfolio.appspot.com",
  messagingSenderId: "548065204590",
  appId: "1:548065204590:web:29ac5e4c8e9def02c4897f",
  measurementId: "G-7W5RVLNZKJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
