"use client"
import getHospitals from "@/libs/getRestaurants";
import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/RestaurantCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function HospitalInfo(){
    const hospitals = getHospitals()
    return(
        <main className="pt-7">
            <title>Select Hospital!</title>
           
            <Suspense fallback={<p className="text-center">Please wait warmly...<LinearProgress/></p>}>
            <h1 className='text-4xl font-semi-bold text-center text-emerald-600 bg-clip-text rounded-lg  drop-shadow-[0_1.0px_1.0px_rgba(0,0,0,0.8)] '><span>Pick your restaurant!</span></h1>
            <HospitalCatalog hospitalsJson={hospitals}/>
            </Suspense>
        </main>
    )
}