import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { app, db } from "./firebaseConfig"; // Ensure db is imported

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const auth = getAuth(app);

  // Initialize default progress in Firestore
  const initializeProgress = async (email) => {
    const userDoc = doc(db, "users", email);
    const userSnapshot = await getDoc(userDoc);

    if (!userSnapshot.exists()) {
      // Default progress for new users
      await setDoc(userDoc, {
        email,
        courses: {
          javascript: "Not Started",
          python: "Not Started",
          java: "Not Started",
        },
        quizHistory: [],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await initializeProgress(userCredential.user.email); // Call the initializeProgress function
        alert("User registered successfully!");
      } catch (error) {
        alert(error.message);
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
      } catch (error) {
        alert(error.message);
      }
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        {isSignup ? "Sign Up" : "Login"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
      <button
        onClick={() => setIsSignup(!isSignup)}
        className="mt-4 text-blue-600 hover:underline"
      >
        {isSignup
          ? "Already have an account? Login here"
          : "Don't have an account? Sign up here"}
      </button>
    </div>
  );
};

export default LoginPage;
