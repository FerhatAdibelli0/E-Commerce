import { createSlice } from "@reduxjs/toolkit";

const initialuiState = {
  products: [],
  productsCount: null,
  categories: [],
  filters: [],
  priceFilter: null,
  sortby: null,
  sortingOrder: false,
  currentPage: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialuiState,
  reducers: {
    replaceProducts(state, action) {
      state.products = action.payload;
    },
    replaceProductCount(state, action) {
      state.productsCount = action.payload;
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
    sortby(state, action) {
      state.sortby = action.payload;
    },
    sorttype(state) {
      state.sortingOrder = !state.sortingOrder;
    },
    onNextPage(state) {
      state.currentPage = state.currentPage + 1;
    },
    onPreviousPage(state) {
      state.currentPage = state.currentPage - 1;
    },
  },
});

export const productsSliceActions = productSlice.actions;

export default productSlice.reducer;
