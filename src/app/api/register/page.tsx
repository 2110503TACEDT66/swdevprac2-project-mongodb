import { authOptions } from "../auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import User from "@/db/models/User"
import { dbConnect } from "@/db/dbConnect"
import { TextField } from "@mui/material"

export default async function registerPage(){

    const registerUser = async (registerUserForm:FormData) => {
        'use server'
        const name = registerUserForm.get("name")
        const telephone_number = registerUserForm.get("telephone_number")
        const email = registerUserForm.get("email")
        const password = registerUserForm.get("password")
        const role = registerUserForm.get("role")

        try {
            await dbConnect()
            const user = await User.create({
                "name" : name ,
                "telephone_number" : telephone_number ,
                "email" : email ,
                "password" : password ,
                "role" : role 
            })
            
        }catch(error){
            console.log(error)
        }

        
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen text-slate-300">
        
        <form action={registerUser} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-slate-600">
        <h2 className="text-2xl font-semibold mb-8">Register Form</h2>
            <input className="border border-gray-300 rounded-md mb-4 px-4 py-2 w-full text-slate-600" type="text" name="name"  placeholder="Name" /><br/><br/>
            <input className="border border-gray-300 rounded-md mb-4 px-4 py-2 w-full" type='text' name="telephone_number"  placeholder="Telephone_number" /><br/><br/>
            <input className="border border-gray-300 rounded-md mb-4 px-4 py-2 w-full" type="email" name="email"   placeholder="Email" /><br/><br/>
            <input className="border border-gray-300 rounded-md mb-4 px-4 py-2 w-full" type="password" name="password"  placeholder="Password" /><br/><br/>
            <input className="border border-gray-300 rounded-md mb-4 px-4 py-2 w-full" type='text' name="role"  placeholder="Role" /><br/><br/>
            <button type="submit" className="bg-blue-500 text-white p-2">Create new account</button>
        </form>
        </div>
    )
}