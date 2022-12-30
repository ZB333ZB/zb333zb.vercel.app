import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "/src/comps/Counter/counterSlice";
import burgerSlice from "../comps/anims/burgerSlice";
import headerHeroSlice from "./headerHeroSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    burger: burgerSlice,
    headerHero: headerHeroSlice,
  },
});
