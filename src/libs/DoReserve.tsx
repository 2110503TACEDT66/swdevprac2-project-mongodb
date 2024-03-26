export default async function doReserve(token:string,restaurantId:string,reservationDate:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/restaurants/${restaurantId}/reservations/`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            reservationDate:reservationDate
        }),
    })
    if(!response.ok) {
        throw new Error("Failed to Reserve")
    }
    // console.log(response.json())

    return await response.json()
}
