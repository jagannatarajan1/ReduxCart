import { createSlice } from "@reduxjs/toolkit";

const addToCartReducer = createSlice({
  name: "addToCartReducer",
  initialState: {
    cartItem: [
      {
        title: "Test",
        price: 6,
        description: "This is a first product - amazing!",
        quantity: 1,
        total: 6,
      },
      {
        title: "Car",
        price: 700,
        description: "This is a first in the world",
        quantity: 1,
        total: 700,
      },
    ],
    myCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.myCart.find(
        (item) => item.title === action.payload.title
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.total += existingItem.price + action.payload.price;
      } else {
        state.myCart.push(action.payload);
      }
      console.log(state);
    },
    removecart: (state, action) => {
      console.log(state.myCart);
      const existingItem = state.myCart.find(
        (item) => item.title === action.payload.title
      );
      console.log(state.myCart);

      if (existingItem.quantity === 1) {
        state.myCart = state.myCart.filter(
          (item) => item.title !== action.payload.title
        );
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
});
export const addToCartReducerActions = addToCartReducer.actions;
export default addToCartReducer;
