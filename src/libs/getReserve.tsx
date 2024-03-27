import { ReservationJson } from "../../interface"

export default async function getReserve(token: string)  {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations`, {

        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${ token }`,
        },
    })
const getReserve:ReservationJson = await response.json()

if (!response.ok) {
    throw new Error("Failed to fetch user")
}
return getReserve
}