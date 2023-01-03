import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { data as cartItems } from "../../cartItems";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      /* 
        console.log(name); // name>> random-name

        console.log(thunkAPI);
            {
            "requestId": "fHxY1FEnIswLPzBgYGRBz",
            "signal": {}
           }
          
        console.log(thunkAPI.getState());
            {
            "cart": {
                "cartItems": [],
                "amount": 0,
                "total": 0,
                "isLoading": true
            },
            "modal": {
                "isOpen": false
            }
          }

            thunkAPI.dispatch(openModal()) !!!
      */
      const res = await axios(url);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("something went wrong...");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        /* 
          console.log("action>>", action);
                {
            "type": "cart/getCartItems/rejected",
            "payload": "something went wrong...",
            "meta": {
                "arg": "random-name",
                "requestId": "b2v9ZYo2gUfU5fTQUC7Wf",
                "rejectedWithValue": true,
                "requestStatus": "rejected",
                "aborted": false,
                "condition": false
            },
            "error": {
                "message": "Rejected"
            }
        }
        */
        state.isLoading = false;
      });
  },
  /* 
    --- DEPRECATED ---
    extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  }, 
     --- D END ---
  */
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
