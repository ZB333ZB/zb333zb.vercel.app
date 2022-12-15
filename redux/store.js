import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../comps/Counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
