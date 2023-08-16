import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectItems: [],
    quantity: 0,
    total: 0,
  } as CartState,
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
    increase: (state, action) => {
      const cartItem = state.selectItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    descrease: (state, action) => {
      const cartItem = state.selectItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem) {
        cartItem.quantity--;
      }
    },
    removeItem: (state, action) => {
      state.selectItems = state.selectItems.filter(
        (item) => item.id !== action.payload
      );
    },
    calculateTotal: (state) => {
      let quantity = 0;
      let total = 0;
      state.selectItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
    clearCart: (state) => {
      state.selectItems = [];
    },
  },
});

export const { addItem, increase, descrease, removeItem, calculateTotal,clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
