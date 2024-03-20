import { HospitalJson } from "../../interface"

export default async function getHospitals() {
    const response = await fetch("https://vaccine-app-backend.vercel.app/api/v1/hospitals")
    if(!response.ok){
        throw new Error("Failed to fetch")
    }

    const hospitals:HospitalJson = await response.json()

    return hospitals
    
}