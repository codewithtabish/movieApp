import { createSlice } from "@reduxjs/toolkit";

const seatSlice=createSlice({
    name:"seat",
    initialState:{
        seatArray:[
            "A1",
            // "A2",
            // "A3",
            // "A4",
            // "A5",
            // "A6",

        ]    },
    reducers:{
        addToSeat:(state,action)=>{
            const presenceItem=state.seatArray.find((item)=>item===action.payload)
            console.log('Array',state.seatArray)

            if(presenceItem){
             const temp=   state.seatArray.filter((item)=>item!==action.payload)
             state.seatArray=temp
            }
            else {
                state.seatArray.push(action.payload)
            }

        }

    }
})
export const {addToSeat} =seatSlice.actions
export default seatSlice.reducer