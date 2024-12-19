import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Incorrect. Try again.");
    }
  };

  const handleNext = () => {
    setFeedback("");
    setSelectedOption(null);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Quiz</h2>
      <div>
        <p className="mb-4 font-semibold">
          {currentQuestion + 1}. {questions[currentQuestion].question}
        </p>
        <ul>
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="option"
                  value={option}
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
          className="px-4 py-2 bg-blue-600 text-white rounded mr-2 hover:bg-blue-500"
        >
          Submit
        </button>
        {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
        {feedback === "✅ Correct!" && currentQuestion < questions.length - 1 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-green-600 text-white rounded mt-2 hover:bg-green-500"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
