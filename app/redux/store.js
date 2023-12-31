import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import appReducer from "./reducers/appReducer";

export const store=configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        App:appReducer
    }
})