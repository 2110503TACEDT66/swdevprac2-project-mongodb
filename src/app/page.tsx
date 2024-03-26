import Image from 'next/image'
import Banner from '@/components/Banner'
import Card from '@/components/Card';
import styles from './page.module.css'
import CardPanel from '@/components/CardPanel';
import PromoteCard from '@/components/PromoteCard';
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function Home() {
  return (
    <main className='h-[500px]'>
      
      <title>Panda Food</title>

      <Suspense fallback={<p className="text-center">Please wait warmly...<LinearProgress/></p>}>
      
      <Banner/>

      </Suspense>

     
      
      
    </main>
  );
}