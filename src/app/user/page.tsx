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
import { useRouter } from "next/navigation";

export default async function UserProfile(){
     const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

   

    return(
        <main className="w-[100%] flex flex-col items-center space-y-1 h-[850px]">
        <div className="bg-slate-500 m-5 p-5 rounded-lg">
            <div className="text-2xl text-orange-200 text-center ">{profile.data.name}'s Information</div>
            <table className="table-auto border-seperate border-spacing-2 text-orange-200 m-5 px-5"><tbody>
                <tr><td className=" px-5">Name:</td><td>{profile.data.name}</td></tr>
                <tr><td className=" px-5">Email:</td><td>{profile.data.email}</td></tr>
                <tr><td className=" px-5">Tel:</td><td>{profile.data.telephone_number}</td></tr>
                <tr><td className="px-5">Member Since:</td><td> {createdAt.toString()}</td></tr>
            </tbody></table>
        </div>
        </main>
    )
}