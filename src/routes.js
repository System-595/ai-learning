import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LandingPage from "./LandingPage";
import CoursePage from "./CoursePage";
import LoginPage from "./LoginPage";
import CourseContent from "./CourseContentfix";
import Navbar from "./Navbarfix";
import QuizPage from "./QuizPage";
import QuizLanguagePage from "./QuizLanguagePage";
import Dashboard from "./Dashboard";

const AppRoutes = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/courses"
          element={user ? <CoursePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/courses/:id"
          element={user ? <CourseContent /> : <Navigate to="/login" />}
        />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz/:language" element={<QuizLanguagePage />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
