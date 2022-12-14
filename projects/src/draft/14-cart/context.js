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
  /* 
  // increase
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  // decrease
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
 */
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  /* refactor increase/decrease */
  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  /* s4: pass initial state to Global Context */
  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, toggleAmount }}
      // value={{ ...state, clearCart, remove, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
