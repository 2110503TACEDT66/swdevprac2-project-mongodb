import { HospitalJson } from "../../interface"

export default async function getHospitals() {
    const response = await fetch("http://localhost:5000/api/v1/restaurants")
    if(!response.ok){
        throw new Error("Failed to fetch")
    }

    const hospitals:HospitalJson = await response.json()

    return hospitals
    
}