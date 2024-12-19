import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const Dashboard = () => {
  const [quizHistory, setQuizHistory] = useState([]);
  const [courseProgress, setCourseProgress] = useState(null); // Default to null
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          // Fetch Quiz History
          const quizQuery = query(
            collection(db, "quizResults"),
            where("email", "==", user.email)
          );
          const quizSnapshot = await getDocs(quizQuery);
          const quizData = quizSnapshot.docs.map((doc) => doc.data());
          setQuizHistory(quizData);

          // Fetch Course Progress
          const progressQuery = query(
            collection(db, "courseProgress"),
            where("email", "==", user.email)
          );
          const progressSnapshot = await getDocs(progressQuery);
          const progressData = progressSnapshot.docs.map((doc) => doc.data());
          setCourseProgress(progressData[0]?.courses || {}); // Set courses from the first document
        } catch (error) {
          console.error("Error fetching data:", error);
          setQuizHistory([]);
          setCourseProgress({});
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [user]);

  if (!user) {
    return <h2 className="text-center text-2xl mt-10">Please log in to view your progress.</h2>;
  }

  if (loading) {
    return <h2 className="text-center text-2xl mt-10">Loading your progress...</h2>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Your Dashboard</h1>

      {/* Course Progress Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Course Progress</h2>
        {courseProgress && Object.keys(courseProgress).length > 0 ? (
          <ul>
            {Object.entries(courseProgress).map(([course, status]) => (
              <li key={course} className="mb-2">
                <strong>{course.replace(/_/g, " ").toUpperCase()}</strong>: {status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No course progress found.</p>
        )}
      </div>

      {/* Quiz History Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Quiz History</h2>
        {quizHistory.length > 0 ? (
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Language</th>
                <th className="py-2 px-4 border-b">Score</th>
                <th className="py-2 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {quizHistory.map((attempt, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{attempt.language}</td>
                  <td className="py-2 px-4 border-b">{attempt.score}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(attempt.timestamp.seconds * 1000).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No quiz history found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
