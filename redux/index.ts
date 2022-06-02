import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "../redux/ui";
import cartSlice from "../redux/cart";
import productSlice from "../redux/product";

const store = configureStore({
  reducer: { ui: uiSlice, cart: cartSlice, products: productSlice },
});

export default store;
