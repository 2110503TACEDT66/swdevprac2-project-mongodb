'use client'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Card( {hospitalName, imgSrc, onRating} : {hospitalName:string, imgSrc:string, onRating?:Function}){
    const [value, setValue] = React.useState<number | null>(5);

    const a = hospitalName + " Rating";

    return(
        <InteractiveCard contentName={hospitalName}>
            <div className='w-full h-[75%] relative rounded-t-lg'>
                <Image src={imgSrc} alt="lollll" fill={true} className='object-cover rounded-t-lg'/>
            </div>

            <div className ='w-full h-[13%] p-[10px]'>
                <h4 className=' font-bold text-gray-800'>{hospitalName}</h4> 
                
            </div>

            {
                onRating? <Box sx={{'& > legend': { mt: 2 },}} className="w-full pl-2  h-[20%]" id={a} data-testid={a}>
                <Rating name={a} value={value} onChange={(event, newValue) => {setValue(newValue); onRating(hospitalName,newValue)}} onClick={(e)=>{e.stopPropagation()}}/>
            </Box>: ''
            }

            
        </InteractiveCard>
        
    )
}