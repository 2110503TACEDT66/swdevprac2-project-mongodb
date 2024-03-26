import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'

export default async function TopMenu(){
    const session = await getServerSession(authOptions)
    return(
        <div className={styles.menucontainer}>
            
            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes = '100vh'/>
            <div className='flex flex-row'>
            {
                session? <Link href="/api/auth/signout"><div className='flex items-center h-full px-5 text-slate-600 font-sans font-semibold text-sm'>
                    Sign out of {session.user?.name}</div></Link>
                :<Link href="/api/auth/signin"><div className='flex items-center h-full px-5 text-slate-600 font-sans font-semibold text-sm'>Sign in</div></Link>
            }
            {
                session? null
                : <Link href="/api/register"><div className='flex items-center h-full px-5 text-slate-600 font-sans font-semibold text-sm'>
                Register</div></Link>
            }

            <TopMenuItem title='User Info' pageRef="/user"/>
            <TopMenuItem title='Reservations' pageRef="/reservations"/>
            <TopMenuItem title='Back to Main Page' pageRef="/"/>
            
            </div>
            <Link href="/restaurant"><div className='flex items-center absolute right-20 h-[80%] top-1 px-3 text-slate-200 bg-rose-700 hover:bg-rose-300 hover:text-slate-700 transition rounded-lg font-sans font-semibold text-sm'>
                    Reserve a table</div></Link>

            
            
            
        </div>
    )
}