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
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interface"
import { useRouter } from "next/navigation";


export default function Reserve (){
    // const session = await getServerSession(authOptions)
    // if(!session || !session.user.token) return null

    // const profile = await getUserProfile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt)
    const router = useRouter()

    const dispatch = useDispatch<AppDispatch>()

    const Booking = () => {
        if(name && id && location && bookDate){
            const item:BookingItem = {
                name: name.substring(0, name.indexOf(' ')),
                surname: name.substring(name.indexOf(' ') + 1),
                id: id,
                hospital: location,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD")
            } 
            dispatch(addBooking(item))
            router.push('reservations')
        }
    }

    const [bookDate, setBookDate] = useState<Dayjs|null>(null)
    const [location, setLocation] = useState<string>('Chulalongkorn Hospital')
    const [name, setName] = useState<string>('')
    const [id, setId] = useState<string>('')
    
    
    return(
        <main className="w-[100%] flex flex-col items-center space-y-1 h-[850px]">
            <title>Book an appointment</title>
            <h1 className='text-4xl font-bold text-orange-200 m-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>Vaccine Booking</h1>

            {/* <div className="bg-slate-500 m-5 p-5 rounded-lg">
            <div className="text-2xl text-orange-200 text-center ">{profile.data.name}'s Information</div>
            <table className="table-auto border-seperate border-spacing-2 text-orange-200 m-5 px-5"><tbody>
                <tr><td className=" px-5">Name:</td><td>{profile.data.name}</td></tr>
                <tr><td className=" px-5">Email:</td><td>{profile.data.email}</td></tr>
                <tr><td className=" px-5">Tel:</td><td>{profile.data.tel}</td></tr>
                <tr><td className="px-5">Member Since:</td><td> {createdAt.toString()}</td></tr>
            </tbody></table>
            </div> */}

            <div className="py-4">
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '500px' },}} className="bg-slate-100 rounded-lg" >
                    <TextField id="name-lastname" name="Name-Lastname" label="Name-Lastname" variant="standard" value={name} onChange={(e)=> {setName(e.target.value)}}/>
                </Box>
            </div>

            <div className="py-4">
                <Box component="form" sx={{'& > :not(style)': { m: 1, width: '500px' },}} className="bg-slate-100 rounded-lg" >
                    <TextField id="name-lastname" name="CitizenID" label="Citizen ID" variant="standard" value={id} onChange={(e)=> {setId(e.target.value)}}/>
                </Box>
            </div>

            

            <div className="w-fit space-y-2 py-6">
                <div className="text-md text-gray-600 text-center">Select Hospital</div>
                <Select variant="standard" name="location" id="location" value={location} onChange={(e)=> {setLocation(e.target.value)}} className="h-[2em] w-[200px] bg-slate-100 rounded-lg py-2 px-2">
                    <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value ="Rajavithi"> Rajavithi Hospital</MenuItem>
                    <MenuItem value ="Thammasat">Thammasat University Hospital</MenuItem>
                </Select>
            </div>

            <div className="w-fit space-y-2 py-4">
                <div className="text-md text-center text-gray-600">Pick a date</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setBookDate(value)}}/>
            </div>

            <button name="Book Vaccine" className="block rounded-md bg-sky-600 hover:bg-sky-700 transition px-3 py-2 space-y-5 text-white shadow-sm" onClick={Booking}>Book Vaccine</button>
            
        </main>
    )
}