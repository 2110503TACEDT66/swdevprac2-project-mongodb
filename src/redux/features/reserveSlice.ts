import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interface";

type CartState = {
    reserveItems: ReservationItem[]
}

const initialState:CartState = {reserveItems:[]}

export const reservationSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>)=>{
            
            console.log("ssss", state.reserveItems)
            const index = state.reserveItems.findIndex(items => items.id==action.payload.id)
            if(index!=-1){
                state.reserveItems.splice(index,1)
            }
            state.reserveItems.push(action.payload)
            
            
        },
        removeReservation: (state, action:PayloadAction<string>)=>{
            const remainItems = state.reserveItems.filter( obj => {
                return ((obj.id !== action.payload))
                
               
            })
            state.reserveItems = remainItems
        }
    }
})

export const { addReservation, removeReservation} = reservationSlice.actions
export default reservationSlice.reducer