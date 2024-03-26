import { authOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import User from "@/db/models/User"
import { dbConnect } from "@/db/dbConnect"

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
        <form action={registerUser}>
            <input type="text" name="name"  placeholder="Name" /><br/>
            <input type='text' name="telephone_number"  placeholder="Telephone_number" /><br/>
            <input type="email" name="email"   placeholder="Email" /><br/>
            <input type="password" name="password"  placeholder="Password" /><br/>
            <input type='text' name="role"  placeholder="Role" /><br/>
            <button type="submit" className="bg-blue-500 text-white p-2">Create new account</button>
        </form>
    )
}