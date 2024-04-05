import { configureStore } from "@reduxjs/toolkit";
import cardSlicer from "../UI/cardSlicer"; // Assuming cardSlicer is a slice created using createSlice from Redux Toolkit

const ReduxStore = configureStore({
  reducer: {
    cart: cardSlicer.reducer,
  },
});

export default ReduxStore;
