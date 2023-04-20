// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB84i5KJ8lIIqONdRKkQ2lH0GzkzRiAtXI",
  authDomain: "auth-and-crud-77f76.firebaseapp.com",
  projectId: "auth-and-crud-77f76",
  storageBucket: "auth-and-crud-77f76.appspot.com",
  messagingSenderId: "713014726654",
  appId: "1:713014726654:web:42cc0b094cd77475517aaf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
