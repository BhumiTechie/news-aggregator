import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Handle profile click
  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Left Side: Navigation Links */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-xl font-bold">
          News App
        </Link>
        <Link to="/trending" className="hover:text-gray-300">
          Trending
        </Link>
        <Link to="/bookmarks" className="hover:text-gray-300">
          Bookmarks
        </Link>
      </div>

      {/* Right Side: Dark Mode Toggle and User Profile */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* User Authentication */}
        {user ? (
          <div className="relative">
            <button
              onClick={handleProfileClick}
              className="w-10 h-10 bg-blue-500 rounded-full text-white font-bold flex items-center justify-center hover:bg-blue-600 focus:outline-none"
              aria-label="Profile"
            >
              {user.name ? user.name.charAt(0).toUpperCase() : "U"}
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-gray-300">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
