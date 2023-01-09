import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  incrementAmount: 1,
  symbolBefore: "",
  symbolAfter: "",
  isDialogOpen: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += Number(state.incrementAmount) || 0;
    },
    decrement: (state) => {
      state.value -= Number(state.incrementAmount) || 0;
    },
    incrementByAmount: (state, action) => {
      state.incrementAmount = Number(action.payload);
    },
    add: (state, action) => {
      state.value += Number(action.payload) || 0;
    },
    setTo: (state, action) => {
      state.value = Number(action.payload);
    },
    reset: (state) => {
      state.value = 0;
    },
    addSymbolAfter: (state, action) => {
      state.symbolAfter = String(action.payload);
    },
    addSymbolBefore: (state, action) => {
      state.symbolBefore = String(action.payload);
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
  add,
} = counterSlice.actions;

export default counterSlice.reducer;
