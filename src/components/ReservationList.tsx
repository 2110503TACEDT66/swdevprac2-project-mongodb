"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch} from "react-redux"
import { removeReservation } from "@/redux/features/reserveSlice"

export default function ReservationList(){

    const reservationItems = useAppSelector((state)=> state.reservationSlice.reserveItems)
    const item = useAppSelector((state)=>(state))
    console.log(item)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
        {
            reservationItems.map((reservationItem)=>(
                <div className="bg-rose-100 rounded-lg px-5 mx-5 py-5 my-5 text-emerald-600" key={reservationItem.id}>
                    <div className="text-md">Name: {reservationItem.name}</div>
                    <div className="text-md">Surname: {reservationItem.surname}</div>
                    <div className="text-md">Restaurant: {reservationItem.restaurant} </div>
                    <div className="text-md">Reservation date: {reservationItem.reservationDate}</div>
                    <button className="block rounded-md bg-red-600 hover:bg-rose-500 transition px-3 py-1 m-2 p-2 text-white shadow-sm" onClick={()=>dispatch(removeReservation(reservationItem.id))}>Cancel Reservation</button>
                </div>
            ))
        }
        </div>

    )
}