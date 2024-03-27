import { useSession } from "next-auth/react"
import ReservationList from "@/components/ReservationList"
import getReserve from "@/libs/getReserve"
import { ReservationItem } from "../../../interface"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"


export default async function CartPage(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const reservationItems = await getReserve(session.user.token)
    return (
        <main>
            <ReservationList reservationItems={reservationItems}/>
        </main>
    )
}