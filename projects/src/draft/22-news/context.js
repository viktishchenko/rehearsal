import React, { useContext, useState, useEffect } from "react";

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "http://hn.algolia.com/api/v1/search?";

const initialState = {};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="halo">{children}</AppContext.Provider>;
};

// custom useContext hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
