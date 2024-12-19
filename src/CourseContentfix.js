import React from "react";
import { useParams } from "react-router-dom";
import JavaScriptContent from "./JavaScriptContent";
import PythonContent from "./PythonContent";
import JavaContent from "./JavaContent";
import Quiz from "./Quiz";

const CourseContent = () => {
  const { id } = useParams();

  const contentMap = {
    1: { 
      title: "JavaScript Essentials", 
      content: JavaScriptContent, 
      quiz: [
        {
          question: "What is the correct way to declare a constant in JavaScript?",
          options: ["let x = 10;", "const x = 10;", "var x = 10;"],
          correctAnswer: "const x = 10;"
        },
        {
          question: "What does `===` check in JavaScript?",
          options: ["Value only", "Value and type", "Type only"],
          correctAnswer: "Value and type"
        }
      ],
    },
    2: { 
      title: "Python Basics", 
      content: PythonContent, 
      quiz: [
        {
          question: "How do you define a function in Python?",
          options: ["function myFunc():", "def myFunc():", "func myFunc():"],
          correctAnswer: "def myFunc():"
        },
        {
          question: "What is the output of: print(type(10))?",
          options: ["<class 'int'>", "<type 'integer'>", "int"],
          correctAnswer: "<class 'int'>"
        }
      ],
    },
    3: { 
      title: "Java Basics", 
      content: JavaContent, 
      quiz: [
        {
          question: "What is the entry point of a Java program?",
          options: ["main()", "start()", "public static void main(String[] args)"],
          correctAnswer: "public static void main(String[] args)"
        },
        {
          question: "Which keyword is used to create a class in Java?",
          options: ["class", "Class", "struct"],
          correctAnswer: "class"
        }
      ],
    },
  };

  const course = contentMap[id];

  if (!course) {
    return <h1 className="text-center mt-10">Course Not Found</h1>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-4 text-center">
        {course.title}
      </h1>
      <div
        className="prose max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8"
        dangerouslySetInnerHTML={{ __html: course.content }}
      ></div>
      <Quiz questions={course.quiz} />
    </div>
  );
};

export default CourseContent;
