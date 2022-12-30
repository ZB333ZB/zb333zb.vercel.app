import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: false,
};

export const burgerSlice = createSlice({
  name: "burger",
  initialState,
  reducers: {
    enable: (state) => {
      state.state = true;
    },
    disable: (state) => {
      state.state = false;
    },
  },
});

export const selectState = (state) => state.burger.state;

export const { enable, disable } = burgerSlice.actions;

export default burgerSlice.reducer;
