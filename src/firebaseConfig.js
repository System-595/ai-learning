import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiXP3zR7iEr6sSn1ZOU-ZMhLST_TFNTeU",
    authDomain: "ai-learning-platform-63fb3.firebaseapp.com",
    projectId: "ai-learning-platform-63fb3",
    storageBucket: "ai-learning-platform-63fb3.firebasestorage.app",
    messagingSenderId: "499234458814",
    appId: "1:499234458814:web:477f0417c193c0b12e62ef",
    measurementId: "G-VWS8466YTC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };
