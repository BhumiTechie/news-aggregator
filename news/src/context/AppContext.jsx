import React, { createContext, useState, useContext } from "react";

// Create context
const AppContext = createContext();

// Create provider component
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use context in any component
export const useAppContext = () => useContext(AppContext);

// Exporting the context to use it elsewhere if needed
export { AppContext };
