"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch} from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"

export default function BookingList(){

    const bookingItems = useAppSelector((state)=> state.bookSlice.bookItems)
    const item = useAppSelector((state)=>(state))
    console.log(item)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
        {
            bookingItems.map((bookingItem)=>(
                <div className="bg-slate-200 rounded-lg px-5 mx-5 py-5 my-5 text-slate-500" key={bookingItem.id}>
                    <div className="text-md">Name: {bookingItem.name}</div>
                    <div className="text-md">Surname: {bookingItem.surname}</div>
                    <div className="text-md">ID Number: {bookingItem.id}</div>
                    <div className="text-md">Hospital: {bookingItem.hospital} </div>
                    <div className="text-md">Book date: {bookingItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 transition px-3 py-1 m-2 p-2 text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookingItem.id))}>Cancel Booking</button>
                </div>
            ))
        }
        </div>

    )
}