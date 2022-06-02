import { createSlice } from "@reduxjs/toolkit";

const initialuiState = {
  isShown: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialuiState,
  reducers: {
    isShown(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;
