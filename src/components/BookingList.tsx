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
                <div className="bg-rose-100 rounded-lg px-5 mx-5 py-5 my-5 text-emerald-600" key={bookingItem.id}>
                    <div className="text-md">Name: {bookingItem.name}</div>
                    <div className="text-md">Surname: {bookingItem.surname}</div>
                    <div className="text-md">Restaurant: {bookingItem.hospital} </div>
                    <div className="text-md">Reservation date: {bookingItem.bookDate}</div>
                    <button className="block rounded-md bg-red-600 hover:bg-rose-500 transition px-3 py-1 m-2 p-2 text-white shadow-sm" onClick={()=>dispatch(removeBooking(bookingItem.id))}>Cancel Reservation</button>
                </div>
            ))
        }
        </div>

    )
}