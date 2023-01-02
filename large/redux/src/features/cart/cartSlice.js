import { createSlice } from "@reduxjs/toolkit";
import { data as cartItems } from "../../cartItems";

const initialState = {
  cartItem: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

/* 
console.log("cartSlice>>", cartSlice);
{
    "name": "cart",
    "actions": {},
    "caseReducers": {}
}
*/

export default cartSlice.reducer;
