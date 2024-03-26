import Image from "next/image"

export default function manual(){
    return(
        <main className="w-[100%] flex flex-col items-center space-y-1 h-[850px] text-slate-600">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-2xl font-semibold mb-8 items-center">Manual</h1>
            <Image src='/img/manual1.png' alt='manual1' width={960} height={501.5}/>
            <div className="text-md font-medium my-2">This is a website that allows you to make restaurant reservations in advance.</div>
            <div className="text-md font-medium my-2">To begin, you need to sign up as a member of the restaurant on the top left corner</div>

            <div className="text-md font-medium my-2">Once you're a member, click on 'Reserve a table' on the top right corner and select the desired restaurant.</div> 
            <Image src='/img/manual2.png' alt='manual2' width={960} height={501.5}/>
            <div className="text-md font-medium my-2">Review the information and then click 'Make reservation'.</div>
            <Image src='/img/manual3.png' alt='manual3' width={960} height={501.5}/>
            <div className="text-md font-medium my-2">After that, click 'Reserve!' and go to the 'Menu Reservations' to check if the reservation details are completed</div>
            <Image src='/img/manual4.png' alt='manual4' width={960} height={501.5}/>
            <div className="text-md font-medium my-2">You can also click 'Cancel' if you are unable to come.</div>
            <Image src='/img/manual6.png' alt='manual6' width={960} height={501.5}/>
        </div>
        </main>
    )
}