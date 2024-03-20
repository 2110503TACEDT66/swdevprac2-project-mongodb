'use client'
import Card from "./Card"
import { useReducer, useState } from "react"
import value from "./Card"
import Link from "next/link"

export default function CardPanel(){
    const ratingThing = (ratingList:Map<string,number>, action:{type:string, hospitalName:string, rating:number})=>{
        if(!action.rating){
            ()=>dispatchRating({type:'remove',hospitalName:action.hospitalName,rating:action.rating});
        }
        switch(action.type){
            case 'change':{
                
                const wawa = new Map(ratingList);
                wawa.set(action.hospitalName,action.rating)
                
                return wawa
                
            }
            case 'remove':{
                ratingList.delete(action.hospitalName)
                return new Map(ratingList)
            }
            default: return ratingList
        }
    }

    const[ratingList,dispatchRating] = useReducer(ratingThing, new Map<string,number>)


    const mockCardrepo = [
        {hid: "001", name:"Chulalongkorn Hospital", image:"/img/chula.jpg"},
        {hid: "002", name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"},
        {hid: "003", name:"Thammasat University Hospital", image:"/img/thammasat.jpg"}
    ]

    return(
        <div>
            <div style={{margin:"20px", display: "flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
               {
                    mockCardrepo.map((cardItem)=>(
                        <Link href={`/hospital/${cardItem.hid}`} className="w-1/5">
                            <Card hospitalName={cardItem.name} imgSrc={cardItem.image} onRating={(hospiName: string, value: number) => dispatchRating({ type: 'change', hospitalName: hospiName, rating: value })} />
                        </Link>
                    ))
               }
            </div>
           
           <div style={{margin:"20px"}}>
                {/* {Array.from(ratingList.keys()).map((card)=><div key={card}>{card}</div>)}
                {Array.from(ratingList.values()).map((card)=><div key={card}>{card}</div>)} */}

                {Array.from(ratingList, ([k,v]) => {return v > 0 && v && (<div className="text-center mt-2" data-testid={k} onClick={()=>dispatchRating({type:'remove',hospitalName:k,rating:v})}> {k} Rating : {v}</div>)})}
            </div>
        </div>

        
    )
}