import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart({ items }, action) {
      items.push(action.payload);
    },
    removeItemFromCart({ items }, action) {
      const id = action.payload.id;
      const ind = items.findIndex((item) => item.product._id === id);
      if (ind != 1) items.splice(ind, 1);
    },
    initializeCart(_, action) {
      return {
        items: [...action.payload]
      }
    },
    emptyCart (_, __) {
      return {
        items: []
      }
    }

  },
});

export const {
  actions: { addItemToCart, removeItemFromCart, initializeCart, emptyCart: emptyReduxCart },
  reducer: cartReducer,
} = cartSlice;
