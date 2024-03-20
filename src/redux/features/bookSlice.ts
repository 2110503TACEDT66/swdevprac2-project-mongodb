import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type CartState = {
    bookItems: BookingItem[]
}

const initialState:CartState = {bookItems:[]}

export const bookSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addBooking: (state, action:PayloadAction<BookingItem>)=>{
            
            console.log("ssss", state.bookItems)
            const index = state.bookItems.findIndex(items => items.id==action.payload.id)
            if(index!=-1){
                state.bookItems.splice(index,1)
            }
            state.bookItems.push(action.payload)
            
            
        },
        removeBooking: (state, action:PayloadAction<string>)=>{
            const remainItems = state.bookItems.filter( obj => {
                return ((obj.id !== action.payload))
                
               
            })
            state.bookItems = remainItems
        }
    }
})

export const { addBooking, removeBooking} = bookSlice.actions
export default bookSlice.reducer