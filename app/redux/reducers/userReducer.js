import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        userName:"jj"
        
    },
    reducers:{
      createUser:  (state,action)=>{

    }
}
})
const  {createUser} =userSlice.actions
export default userSlice.reducer