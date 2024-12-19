import React from "react";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import CodeEditor from "./CodeEditor";

const CoursePage = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const updateCourseProgress = async (courseTitle) => {
    if (user) {
      const progressDoc = doc(db, "courseProgress", user.email); // Reference to the user's document in the "courseProgress" collection
      const progressKey = courseTitle.toLowerCase().replace(/\s+/g, "_"); // Format the key for Firestore

      try {
        const docSnapshot = await getDoc(progressDoc);

        if (docSnapshot.exists()) {
          // If document exists, update the progress
          await updateDoc(progressDoc, {
            [`courses.${progressKey}`]: "In Progress",
          });
        } else {
          // If document does not exist, create it
          await setDoc(progressDoc, {
            email: user.email,
            courses: {
              [progressKey]: "In Progress",
            },
          });
        }
      } catch (error) {
        console.error("Error updating course progress:", error);
      }
    }
  };

  const courses = [
    { id: 1, title: "JavaScript Essentials", description: "Master the language of the web." },
    { id: 2, title: "Python Basics", description: "Learn the fundamentals of Python." },
    { id: 3, title: "Java Programming", description: "Understand object-oriented programming in Java." },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-blue-600 my-8">
        Explore Our Programming Courses
      </h1>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mb-12">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {course.title}
            </h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link
              to={`/courses/${course.id}`}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
              onClick={() => updateCourseProgress(course.title)} // Update progress on click
            >
              Start Learning
            </Link>
          </div>
        ))}
      </div>

      {/* Interactive Code Editor Section */}
      <div className="bg-white shadow-lg p-6 rounded-lg mx-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          Practice with Code Editor
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Write and run code directly in your browser.
        </p>
        <CodeEditor />
      </div>
    </div>
  );
};

export default CoursePage;
