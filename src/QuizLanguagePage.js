import React from "react";
import { useParams } from "react-router-dom";
import QuizQuestions from "./QuizQuestions";
import QuizComponent from "./QuizComponent";

const QuizLanguagePage = () => {
  const { language } = useParams(); // Extract the language from the URL
  const questions = QuizQuestions[language]; // Get questions based on the language

  if (!questions) {
    return <h1 className="text-center mt-10">Invalid Language Selected!</h1>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
        {language.toUpperCase()} Quiz
      </h1>
      <QuizComponent questions={questions} language={language} /> {/* Pass the language */}
    </div>
  );
};

export default QuizLanguagePage;
