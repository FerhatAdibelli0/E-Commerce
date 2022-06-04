import { createSlice } from "@reduxjs/toolkit";

const initialuiState = {
  products: [],
  categories: [],
  filters: [],
  priceFilter: null,
  sortby:null,
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
    addFilter(state, action) {
      const newItem = action.payload;
      let existingfilter = state.filters.includes(newItem);
      if (!existingfilter) {
        state.filters.push(newItem);
      }
    },
    removeFilter(state, action) {
      state.filters = state.filters.filter((filt) => filt !== action.payload);
    },
    addPriceFilter(state, action) {
      state.priceFilter = action.payload;
    },
    removePriceFilter(state) {
      state.priceFilter = null;
    },
    sortby(state,action){
      state.sortby=action.payload
    }
  },
});

export const productsSliceActions = productSlice.actions;

export default productSlice.reducer;
