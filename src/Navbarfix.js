import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const auth = getAuth();
  const user = auth.currentUser; // Get the current user
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          AI Learning Platform
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-gray-300">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="hover:text-gray-300">
              Quiz
            </Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
          )}
          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded text-white"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
