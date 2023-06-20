import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import appReducer from "./reducers/appReducer";
import seatReducer from "./reducers/seatReducer";

export const store=configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer,
        App:appReducer,
        seat:seatReducer
    }
})