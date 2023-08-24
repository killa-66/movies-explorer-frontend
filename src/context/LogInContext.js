import React, { useState } from "react";

export const LogInContext = React.createContext(true);

export const LogInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const setLoggedIn = () => {
    setIsLoggedIn(true);
  };
  const setLoggedOut = () => {
    setIsLoggedIn(false);
  };
  return (
    <LogInContext.Provider value={{ isLoggedIn, setLoggedIn, setLoggedOut }}>
      {children}
    </LogInContext.Provider>
  );
};