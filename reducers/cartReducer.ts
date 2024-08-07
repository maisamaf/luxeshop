// @ts-nocheck
import { DataFormat } from "@/utils/data";

import { createSlice } from "@reduxjs/toolkit";

const initialState: DataFormat = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: {
        payload: { title: string; price: number; color: string; id: any };
      }
    ) => {
      const itemIndex = state.findIndex(
        (existingItem) => existingItem.id === action.payload.id
      );

      if (itemIndex === -1) {
        state.push({ ...action.payload });
      } else {
        // If the item exists, update its properties
        const existingItem = state[itemIndex];
        const updatedItem = { ...existingItem, ...action.payload };
        state[itemIndex] = updatedItem;
      }
    },
    removeFromCart: (state: any[], action: { payload: any }) => {
      return state.filter((item: { id: any }) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
