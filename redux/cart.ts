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
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalprice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalprice = existingItem.totalprice + existingItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const existingItem = state.items.find(
        (item: any) => item.id === action.payload
      );
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity--;
        existingItem.totalprice = existingItem.totalprice - existingItem.price;
      }
    },
    clearAllCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
