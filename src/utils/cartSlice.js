import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Adds an item to the cart
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Removes the last item from the cart
      state.items.pop();
    },
    clearCart: (state) => {
      // Clears all items from the cart
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
