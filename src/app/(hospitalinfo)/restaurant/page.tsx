"use client"
import getHospitals from "@/libs/getRestaurants";
import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function HospitalInfo(){
    const hospitals = getHospitals()
    return(
        <main className="pt-7">
            <title>Select Hospital!</title>
           
            <Suspense fallback={<p className="text-center">Please wait warmly...<LinearProgress/></p>}>
            <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
        </main>
    )
}