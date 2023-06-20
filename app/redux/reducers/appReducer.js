import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"App",
    initialState:{
        appLoaderBoolean:false

    },
    reducers:{
        changeAppLoader:(state,action)=>{
            state.appLoaderBoolean=action.payload

        }

    }
})
export const {changeAppLoader} =appSlice.actions
export default appSlice.reducer