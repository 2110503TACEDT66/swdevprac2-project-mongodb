"use client"
import DateReserve from "@/components/DateReserve"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Select,MenuItem} from "@mui/material"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addReservation } from "@/redux/features/reserveSlice";
import { ReservationItem } from "../../../interface"
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";


export default function Reserve (){
    const router = useRouter()

    const urlParams = useSearchParams()
    const hid = urlParams.get('id')
    const restaurantName = urlParams.get('name')

    const dispatch = useDispatch<AppDispatch>()
    //const {data:session} = useSession()
    //console.log(session?.user.name)

    const Booking = () => {
        if(restaurantName && hid && bookDate){
            const item:ReservationItem = {
                name: restaurantName,
                id: hid,
                reservationDate: dayjs(bookDate).format("YYYY/MM/DD")
            } 
            dispatch(addReservation(item))
            alert("Success!")
            router.push('reserve')
        }
    }

    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [returnDate, setReturnDate] = useState<Dayjs|null>(null)
    const [returnlocation, setReturnLocation] = useState<string|null>(null)
    const [name, setName] = useState<string>('')
    const [id, setId] = useState<string>('')
    
    
    return(
        <main className="w-[100%] flex flex-col items-center space-y-1 h-[850px]">
            <title>Reserve a restaurant</title>
            <h1 className='text-4xl font-semi-bold text-emerald-600 m-20 bg-white-100 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>Make your reservation</h1>
            <h2 className='z-20 text-center font-bold bg-rose-100 m-2 p-2 rounded-lg text-rose-800 text-xl'>Reserving for : {restaurantName}</h2>

            {/* <div className="py-4">
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '500px' },}} className="bg-rose-100 rounded-lg" >
                    <TextField id="name-lastname" name="Name-Lastname" label="Name-Lastname" variant="standard" value={name} onChange={(e)=> {setName(e.target.value)}}/>
                </Box>
            </div> */}

            <div className="w-fit space-y-2 py-4">
                <div className="text-md text-center text-gray-600 ">Pick a date</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}/>
            </div>

            <button name="Book Vaccine" className="block rounded-md bg-rose-600 hover:bg-rose-700 transition px-3 py-2 space-y-5 text-white shadow-sm" onClick={Booking}>Reserve!</button>
            
        </main>
    )
}

//line 74
            // <div className="py-4">
            //     <Box component="form" sx={{'& > :not(style)': { m: 1, width: '500px' },}} className="bg-rose-100 rounded-lg" >
            //         <TextField id="name-lastname" name="CitizenID" label="Citizen ID" variant="standard" value={id} onChange={(e)=> {setId(e.target.value)}}/>
            //     </Box>
            // </div>

            

            // <div className="w-fit space-y-2 py-6">
            //     <div className="text-md text-gray-600 text-center">Select Restaurant</div>
            //     <Select variant="standard" name="location" id="location" value={location} onChange={(e)=> {setLocation(e.target.value)}} className="h-[2em] w-[200px] bg-rose-100 rounded-lg py-2 px-2">
            //         <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
            //         <MenuItem value ="Rajavithi"> Rajavithi Hospital</MenuItem>
            //         <MenuItem value ="Thammasat">Thammasat University Hospital</MenuItem>
            //     </Select>
            // </div>