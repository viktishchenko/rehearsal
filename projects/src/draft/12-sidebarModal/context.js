import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="halo">{children}</AppContext.Provider>;
};

// custom hook

export { AppContext, AppProvider };
