import { configureStore } from "@reduxjs/toolkit";
import cardSlicer from "../UI/cardSlicer";
import addToCartReducer from "../Cart/addToCartReducer";

const ReduxStore = configureStore({
  reducer: {
    cart: cardSlicer.reducer,
    addToCart: addToCartReducer.reducer,
  },
});

export default ReduxStore;
