import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to AI Learning Platform 🚀
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6 max-w-2xl">
        Learn programming languages interactively with AI-powered tools, quizzes, and code challenges.
      </p>
      <div className="space-x-4">
        <Link to="/courses">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500">
            Start Learning
          </button>
        </Link>
        <Link to="/quiz">
          <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-500">
            Take a Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
