import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (selectedLanguage) {
      navigate(`/quiz/${selectedLanguage}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Select a Programming Language
      </h1>
      <div className="space-y-4">
        <label className="block">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-4 py-2 border rounded shadow focus:outline-none"
          >
            <option value="">-- Select a Language --</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </label>
        <button
          onClick={handleStartQuiz}
          disabled={!selectedLanguage}
          className={`px-6 py-2 rounded ${
            selectedLanguage
              ? "bg-blue-600 hover:bg-blue-500 text-white"
              : "bg-gray-400 text-gray-700"
          }`}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
