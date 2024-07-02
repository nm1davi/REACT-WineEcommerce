// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjsjFGhir12mcPf0RMlQv15OcrBhf1UgA",
  authDomain: "mendovino-2c9b6.firebaseapp.com",
  projectId: "mendovino-2c9b6",
  storageBucket: "mendovino-2c9b6.appspot.com",
  messagingSenderId: "758068700607",
  appId: "1:758068700607:web:87db9051aa3b5e1bdfad0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);