import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../store/counterSlice/counterSlice'

export const store = configureStore({
    reducer: {
        counter : counterReducer
    }
})
