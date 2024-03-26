import Link from "next/link";
import styles from './topmenu.module.css'

export default function TopMenuItem({title, pageRef}:{title:string, pageRef:string}){
    return(
        <Link href={pageRef} className='flex items-center h-full px-2 text-slate-600 font-sans font-semibold text-sm'>
            {title}
        </Link>
    );
}