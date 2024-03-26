'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner(){

    const covers = ['/img/cover.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    const {data:session} = useSession()
    console.log(session)

    return(
    <div className={styles.banner} onClick={()=>{setIndex(index+1)}}>
        <Image src={covers[index%1]} alt='lol' fill={true} objectFit='cover' className="h-[800px]"/>
        <div className={styles.bannerText}>
            <h1 className='text-4xl font-bold text-orange-100'>Panda Food</h1>
            <h3 className='text-lg font-serif italic text-orange-100'>Your number 1 choice for restaurant reserving</h3>
            <br></br>
            <br></br>
            
           
        </div>

        {
            session? <div className='z-20 absolute top-5 left-10 font-bold bg-orange-100 m-2 p-2 rounded-lg text-rose-800 text-xl'>Welcome, {session.user?.name}</div>
                    : null
            }
        
        {/* <button className='bg-white text-rose-600 border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 transition hover:bg-rose-600 hover:text-orange-100 hover:border-transparent right-10' onClick={(e)=>{e.stopPropagation(); router.push('/restaurant')}}>
            Select Restaurant
        </button> */}
    </div>)
}
