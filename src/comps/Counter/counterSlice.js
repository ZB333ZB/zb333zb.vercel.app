import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  symbolBefore: "",
  symbolAfter: "",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setTo: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    addSymbolAfter: (state, action) => {
      state.symbolAfter = action.payload;
    },
    addSymbolBefore: (state, action) => {
      state.symbolBefore = action.payload;
    },
  },
});

export const selectValue = (state) => state.counter.value;
export const selectSymbolAfter = (state) => state.counter.symbolAfter;
export const selectSymbolBefore = (state) => state.counter.symbolBefore;

export const {
  increment,
  decrement,
  incrementByAmount,
  setTo,
  reset,
  addSymbolAfter,
  addSymbolBefore,
} = counterSlice.actions;

export default counterSlice.reducer;
