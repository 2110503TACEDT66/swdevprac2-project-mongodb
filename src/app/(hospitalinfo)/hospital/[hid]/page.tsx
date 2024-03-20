import Image from "next/image";
import getHospital from "@/libs/getHospital";

export default async function HospitalDetail({params} : {params:{hid:string}}){
    const hospitalDetail = await getHospital(params.hid)
    // const mockCardrepo = new Map()
    // mockCardrepo.set("001",{name:"Chulalongkorn Hospital", image: "/img/chula.jpg"})
    // mockCardrepo.set("002",{name:"Rajavithi Hospital", image: "/img/rajavithi.jpg"})
    // mockCardrepo.set("003",{name:"Thammasat University Hospital", image: "/img/thammasat.jpg"})

    
    return(
        <main className="text-center p-5">
            <title>Hospital Info</title>
            <div className="text-3xl font-medium font-serif py-2 text-orange-200">{hospitalDetail.data.name}</div>
            <div className="flex flex-row my-5 block ml-50 mr-auto">
                <Image src={hospitalDetail.data.picture} alt='Card' width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"/>
                <div className="text-md text-left mx-5">
                <div className="text-md">Address: {hospitalDetail.data.address}</div>
                <div className="text-md">District: {hospitalDetail.data.district}</div>
                <div className="text-md">Province: {hospitalDetail.data.province}</div>
                <div className="text-md">Postal Code: {hospitalDetail.data.postalcode}</div>
                <div className="text-md">Tel: {hospitalDetail.data.tel}</div>
                </div>
            </div>
            
        </main>
    )
}

// export async function generateStaticParams(){
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }