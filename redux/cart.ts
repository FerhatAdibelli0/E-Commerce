import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.changed = true;
      state.items.push({
        id: newItem.id,
        name: newItem.name,
        image: newItem.image,
        price: newItem.price,
      });
    },
    clearAllCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
