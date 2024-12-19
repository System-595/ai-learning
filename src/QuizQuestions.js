import JavaScriptQuestions from "./JavaScriptQuestions";
import PythonQuestions from "./PythonQuestions";
import JavaQuestions from "./JavaQuestions";

const QuizQuestions = {
  javascript: JavaScriptQuestions.map((question) => ({
    ...question,
    language: "JavaScript", // Add "JavaScript" as the language
  })),
  python: PythonQuestions.map((question) => ({
    ...question,
    language: "Python", // Add "Python" as the language
  })),
  java: JavaQuestions.map((question) => ({
    ...question,
    language: "Java", // Add "Java" as the language
  })),
};

export default QuizQuestions;
