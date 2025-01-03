import React, { useContext } from "react";
import { AppProvider } from "../context/AppContext";

const Preferences = () => {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  return (
    <div>
      <h1>Preferences Page</h1>
      <div>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Preferences;
