import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (userData) => {
    // Simulate signup
    setUser({ ...userData, createdAt: new Date().toLocaleDateString() });
  };

  const login = async (userData) => {
    if (!userData.email || !userData.password) {
      throw new Error("Email and password are required for login.");
    }
    setUser({ ...userData }); // Assuming backend validation is skipped for now
  };
  
  
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
