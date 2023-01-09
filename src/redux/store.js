import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "/src/comps/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
