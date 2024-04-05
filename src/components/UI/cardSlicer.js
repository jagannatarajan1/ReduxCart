import { createSlice } from "@reduxjs/toolkit";

const cardSlicer = createSlice({
  name: "cardSlicer",
  initialState: {
    cardVisibility: false,
  },
  reducers: {
    toggleCardVisibility: (state) => {
      state.cardVisibility = !state.cardVisibility;
    },
  },
});

export const cardSlicerActions = cardSlicer.actions;
export default cardSlicer;
