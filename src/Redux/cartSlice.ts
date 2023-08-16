import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectItems: [], //Array to hold selected items in the cart
    quantity: 0, // Total quantity of all items in the cart
    total: 0, //Total cost of all items in the cart
  } as CartState,
  reducers: {
    addItem: (state, action) => {
      // Find the added item among the items in the cart
      const cartItem = state.selectItems.find(
        (item) => item.id === action.payload.id
      );
      // If the item is in the cart, increase its quantity, otherwise add the item
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
      // Find the item to increase its quantity among the items in the cart
      const cartItem = state.selectItems.find(
        (item) => item.id === action.payload
      );
      // If the item is found, increase its quantity
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    descrease: (state, action) => {
      // Find the item to decrease its quantity among the items in the cart
      const cartItem = state.selectItems.find(
        (item) => item.id === action.payload
      );
      // If the item is found, decrease its quantity
      if (cartItem) {
        cartItem.quantity--;
      }
    },
    removeItem: (state, action) => {
      // Remove the item with the given id from the cart
      state.selectItems = state.selectItems.filter(
        (item) => item.id !== action.payload
      );
    },
    calculateTotal: (state) => {
      // Calculate the total quantity and total price of items in the cart
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
      // Clear the cart, i.e., remove all items
      state.selectItems = [];
    },
  },
});

export const {
  addItem,
  increase,
  descrease,
  removeItem,
  calculateTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
