import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const url = "";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="halo">{children}</AppContext.Provider>;
};

// custom useContext hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
