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
            
            <TopMenuItem title='Booking' pageRef='/booking'/>

            
            <Link href="/mybooking"><div className='flex items-center absolute left-40 h-full px-2 text-slate-600 font-sans font-semibold text-sm'>
                    My Booking</div></Link>
            
            
            {
                session? <Link href="/api/auth/signout"><div className='flex items-center absolute left-5 h-full px-2 text-slate-600 font-sans font-semibold text-sm'>
                    Sign out of {session.user?.name}</div></Link>
                :<Link href="/api/auth/signin"><div className='flex items-center absolute left-5 h-full px-2 text-slate-600 font-sans font-semibold text-sm'>Sign in</div></Link>
            }

            
            
            
        </div>
    )
}