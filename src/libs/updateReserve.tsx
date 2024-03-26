export default async function updateReserve(token:string, resid:string, reservationDate:string){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/${resid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            reservationDate: reservationDate,
        }),
    })
    if(!response.ok){
        throw new Error("Failed to fetch reservation")
    }
    return await response.json()
}