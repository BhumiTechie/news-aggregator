import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav
      className={`flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } shadow-md`}
    >
      {/* Left Section: Logo and Links */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold">
          News App
        </Link>
        <Link
          to="/trending"
          className={`hover:text-sky-500 ${darkMode && "text-gray-200"}`}
        >
          Trending
        </Link>
        <Link
          to="/bookmarks"
          className={`hover:text-sky-500 ${darkMode && "text-gray-200"}`}
        >
          Bookmarks
        </Link>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center bg-gray-200 rounded-md shadow-inner focus-within:ring-2 focus-within:ring-sky-500">
        <input
          type="text"
          placeholder="Search News"
          className={`w-64 px-4 py-2 text-sm rounded-l-md focus:outline-none ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        />
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-r-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>

      {/* Right Section: Theme Toggle and User Controls */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode ? "bg-yellow-500" : "bg-gray-700"
          } hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white`}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        {user ? (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleProfileClick}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
            >
              {user?.name
                ? user.name.charAt(0).toUpperCase()
                : user?.email?.charAt(0).toUpperCase() || "?"}
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className={`hover:text-sky-500 ${darkMode && "text-gray-200"}`}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={`hover:text-sky-500 ${darkMode && "text-gray-200"}`}
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
