import Card from "./Card"
import Link from "next/link"
import { HospitalJson } from "../../interface"
import { HospitalItem } from "../../interface"
export default async function HospitalCatalog({ hospitalsJson}:{hospitalsJson:Promise<HospitalJson>}){
    const hospitalsJsonReady = await hospitalsJson
    return (
        <>
           
            <div style={{margin:"20px", display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                {
                    hospitalsJsonReady.data.map((HospitalItem:HospitalItem)=>(
                        <Link href={`/restaurant/${HospitalItem.id}`} className="w-1/5">
                        <Card hospitalName={HospitalItem.name} imgSrc={HospitalItem.picture} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}