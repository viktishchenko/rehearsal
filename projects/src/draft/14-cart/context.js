import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

/* s1: add useReducer initial state*/
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  /* s3: add reducer & initial state */
  const [state, dispatch] = useReducer(reducer, initialState);

  /* s8: add clear cart func w action */
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  /* remove single item */
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  /* s4: pass initial state to Global Context */
  return (
    <AppContext.Provider value={{ ...state, clearCart, remove }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
