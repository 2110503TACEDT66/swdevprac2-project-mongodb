export default async function getHospital(id:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/restaurants/${id}`)
    if(!response.ok){
        throw new Error("Failed to fetch")
    }

    return await response.json()
    
}