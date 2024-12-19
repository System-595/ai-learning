import React, { useState } from "react"; // Import useState for state management
import { getAuth } from "firebase/auth"; // Import getAuth for authentication
import { addDoc, collection } from "firebase/firestore"; // Import Firestore functions
import { db } from "./firebaseConfig"; // Import Firestore database instance from firebaseConfig.js

const QuizComponent = ({ questions, language }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
      if (user) {
        saveScoreToFirestore(score + 1); // Save score
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const saveScoreToFirestore = async (finalScore) => {
    try {
      const userEmail = user.email;
      await addDoc(collection(db, "quizResults"), {
        email: userEmail,
        language: language, // Use the language passed as a prop
        score: finalScore,
        timestamp: new Date(),
      });
    } catch (error) {
      console.error("Error saving score to Firestore:", error);
    }
  };

  if (showResults) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl">Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {currentQuestion + 1}. {questions[currentQuestion].question}
      </h2>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="option"
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="mr-2"
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
      >
        Submit
      </button>
    </div>
  );
};

export default QuizComponent;
