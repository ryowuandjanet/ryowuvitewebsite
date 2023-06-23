import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpUUaLPKXxQpcZ2SUbUQ9l4fp09-1Wr5w",
  authDomain: "test-19277.firebaseapp.com",
  projectId: "test-19277",
  storageBucket: "test-19277.appspot.com",
  messagingSenderId: "567561852471",
  appId: "1:567561852471:web:befbb80e6062fe8d1b11b2",
  measurementId: "G-EVW9YL3G04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);