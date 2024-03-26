export default async function doReserve(token:string,restaurantId:string,reservationDate:Date) {
    const response = await fetch(`http://localhost:5000/api/v1/restaurants/${restaurantId}/reservations/`,{
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            reservationDate:reservationDate
        }),
    })
    if(!response.ok) {
        throw new Error("Failed to login")
    }
    // console.log(response.json())

    return await response.json()
}
