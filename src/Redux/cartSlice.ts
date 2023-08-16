import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectItems: [] as CartItem[],
  },
  reducers: {
    addItem: (state, action) => {
      const cartItem = state.selectItems.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.selectItems = [
          ...state.selectItems,
          {
            id: action.payload.id,
            title: action.payload.title,
            price: action.payload.price,
            quantity: action.payload.quantity,
            img1: action.payload.img1,
          },
        ];
      }
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
