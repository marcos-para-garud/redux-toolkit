import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Slice.jsx'

export const store = configureStore({
    reducer : todoReducer
})