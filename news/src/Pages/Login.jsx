import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/"); // Navigate to homepage on login
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-[90%] max-w-md text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-4">
          Welcome Back
        </h1>
        <p className="text-gray-300 text-sm mb-6">
          Log in to access amazing features
        </p>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 text-gray-900 rounded-xl focus:outline-none focus:ring focus:ring-purple-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 text-gray-900 rounded-xl focus:outline-none focus:ring focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          className="w-full py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg transform hover:scale-105 transition duration-200"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
