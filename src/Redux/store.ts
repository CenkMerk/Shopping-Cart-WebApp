import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    counter: cartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
