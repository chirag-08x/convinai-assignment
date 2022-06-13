import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/cartSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
