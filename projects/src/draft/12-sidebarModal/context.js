import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="halo">{children}</AppContext.Provider>;
};

// custom hook (naming IMPORTANT!!!)
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
