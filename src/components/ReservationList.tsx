
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch} from "react-redux"
import { removeReservation } from "@/redux/features/reserveSlice"
import { useSession } from "next-auth/react"

export default function ReservationList(){

    const reservationItems = useAppSelector((state)=> state.reservationSlice.reserveItems)
    const item = useAppSelector((state)=>(state))
    const {data:session} = useSession()
    console.log(item)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div>
        {
            reservationItems.map((reservationItem)=>(
                <div className="bg-rose-50 rounded-lg px-5 mx-5 py-5 my-5 text-emerald-600" key={reservationItem.id}>
                    <div className="text-md">Customer Name:  {session.user?.name}</div>
                    <div className="text-md">Restaurant Name: {reservationItem.name}</div>
                    <div className="text-md">Reservation date: {reservationItem.reservationDate}</div>
                    <button className="block rounded-md bg-red-600 hover:bg-rose-500 transition px-3 py-1 m-2 p-2 text-white shadow-sm" onClick={()=>dispatch(removeReservation(reservationItem.id))}>Cancel Reservation</button>
                </div>
            ))
        }
        </div>

    )
}