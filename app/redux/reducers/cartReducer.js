import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",

    initialState:{
        cartArray:[1,2,3],
        appLoader:false
    },
    reducers:{
        addToCart:(state,action)=>{

        }
    }
})
export const {addToCart}=cartSlice.actions

export default cartSlice.reducer