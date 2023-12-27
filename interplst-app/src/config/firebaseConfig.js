// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6SiMY30APcGuU1t7k-4SsxPpQv84u9I0",
  authDomain: "interplast-app.firebaseapp.com",
  projectId: "interplast-app",
  storageBucket: "interplast-app.appspot.com",
  messagingSenderId: "406837540564",
  appId: "1:406837540564:web:c4933de83d8b54b2956d41",
  measurementId: "G-LL3EPJ7PHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

export const db = getFirestore(app);