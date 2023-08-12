import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./cartSlice";


export const store = configureStore({
    reducer: {
        cart: cartReduce
    }
})