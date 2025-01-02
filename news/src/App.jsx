import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Trending from "./Components/Trending";
import Bookmark from "./Pages/Bookmark";
import Preferences from "./Pages/Preferences";
import Login from "./Pages/Login";
import Signup from "./Components/Signup";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./Components/Profile";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AuthProvider>
      <Router>
        <div className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}>
          {/* Only one Navbar component needed */}
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          {/* Routes configuration */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/bookmarks" element={<Bookmark />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          
          {/* Footer component */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;