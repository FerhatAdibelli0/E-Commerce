import { createSlice } from "@reduxjs/toolkit";

const initialuiState = {
  products: [],
  categories: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialuiState,
  reducers: {
    replaceProducts(state, action) {
      state.products = action.payload;
    },
    replaceCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const productsSliceActions = productSlice.actions;

export default productSlice.reducer;
