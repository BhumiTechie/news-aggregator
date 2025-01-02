import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    // Replace with your actual signup API or Firebase logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setUser({ name: "User", email });
        resolve();
      }, 1000);
    });
  };

  const login = (email, password) => {
    // Replace with your actual login API or Firebase logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setUser({ name: "User", email });
        resolve();
      }, 1000);
    });
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
