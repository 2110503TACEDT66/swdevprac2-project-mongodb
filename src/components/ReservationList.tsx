"use client"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch} from "react-redux"
import { removeReservation } from "@/redux/features/reserveSlice"
import { useSession } from "next-auth/react"
import { ReservationJson } from "../../interface"
import deleteReserve from "@/libs/deleteReserve"
import updateReserve from "@/libs/updateReserve"
import { ReservationItem } from "../../interface"
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react"
import DateReserve from "./DateReserve"
import { revalidateTag } from "next/cache"
import RefetchReservation from "./RefetchReservation"


export default function ReservationList({reservationItems}: {reservationItems:ReservationJson}){
    const {data:session} = useSession()
    if(!session || !session.user.token) return null
    
    return (
        <div>
        {
            reservationItems.data.map((reservationItem )=>(
                <ReservationItem reservationItem={reservationItem} key={reservationItem._id}/>
            ))
        }
        </div>

    )
}

function ReservationItem({reservationItem}: {reservationItem:ReservationItem}) {
    const {data:session} = useSession()
    if(!session || !session.user.token) return null
    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    return (
        <div className="bg-rose-50 rounded-lg px-5 mx-5 py-5 my-5 text-emerald-600" >
                    <div className="text-md">Restaurant Name: {reservationItem.restaurant.name}</div>
                    <div className="text-md">Reservation date: {reservationItem.reservationDate}</div>
                    <div className="w-fit space-y-2 py-4">
                        <div className="text-md text-center text-gray-600 ">Pick a date</div>
                        <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}/>
                    </div>
                    {
                        bookDate? <button className="block rounded-md bg-red-600 hover:bg-rose-500 transition px-3 py-1 m-2 p-2 text-white shadow-sm" onClick={()=>{updateReserve(session.user.token,reservationItem._id,bookDate.toISOString());RefetchReservation()}}>Update Reservation</button>
                        : null
                    }
                    
                    <button className="block rounded-md bg-red-600 hover:bg-rose-500 transition px-3 py-1 m-2 p-2 text-white shadow-sm" onClick={()=>{deleteReserve(session.user.token,reservationItem._id);RefetchReservation()}}>Cancel Reservation</button>
                </div>
    )
}