'use client'
import {DatePicker} from "@mui/x-date-pickers"
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { Dayjs } from "dayjs"
import { useState } from "react"
import { Select,MenuItem } from "@mui/material"


export default function DateReserve({onDateChange}:{onDateChange:Function}){

    const [reservationDate, setReservationDate] = useState<Dayjs | null> (null)
    const [location, setLocation] = useState<string>('Chulalongkorn Hospital')
    return(
        <div className="bg-rose-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reservationDate}
                onChange={(value)=>{setReservationDate(value); onDateChange(value)}}/>
                
            </LocalizationProvider>

            
        </div>
    )
}