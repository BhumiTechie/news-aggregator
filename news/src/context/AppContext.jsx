import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <AppContext.Provider value={{ bookmarks, setBookmarks }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
