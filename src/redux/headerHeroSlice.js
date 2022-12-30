import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: false,
};

export const headerHeroSlice = createSlice({
  name: "headerHero",
  initialState,
  reducers: {
    reveal: (state) => {
      state.state = true;
    },
    conceal: (state) => {
      state.state = false;
    },
  },
});

export const selectState = (state) => state.headerHero.state;

export const { reveal, conceal } = headerHeroSlice.actions;

export default headerHeroSlice.reducer;
