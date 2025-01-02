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
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
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
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {user ? (
          <div className="relative">
            <button
              onClick={handleProfileClick}
              className="w-10 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center hover:bg-blue-600"
            >
              {user?.name ? user.name.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase() || "?"}
            </button>
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Logout
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
