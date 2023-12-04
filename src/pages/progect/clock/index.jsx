// @flow strict

import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Clothes from './Clothes';
function Pagation({prop}) {


    
    const [Clock,setClock]=useState("Clock")

    const data=prop.filter((i)=>i.categroy===Clock)

   
    const [current,setcurrent]=useState(1)
    const [trans,settrans]=useState(0)
    
   


const productnumpage=2;
const pages=Math.ceil(data.length / productnumpage)


const startindex=(current-1)*productnumpage
const finshindex=current* productnumpage
const product=data.slice(startindex,finshindex)
const greatepage=[]
for (let index = 0; index < pages; index++) {
    greatepage.push(index+1)
    
}

return (
        <>
     <Clothes data={product}/>
        <div className='allpro'>
     <div className='flex bg-gray-200 relative w-[300px] overflow-hidden m-auto mt-[20px] justify-center'>    
     <button className='absolute left-0 m-auto z-10 w-fit h-[100%] p-2 bg-gray-400 font-bold '  onClick={()=>settrans(trans+50)}>Next</button>    
         {
                greatepage.map((page,i)=>(
                    <div key={page} className={` p-[10px] m-1 font-bold  cursor-pointer
                    
                ${current===page&&'bg-gray-300'} `}   style={{ transform: `translateX(${trans}px)`}} onClick={()=>setcurrent(page)} >
{page}
                    </div>
                ))
            }
                 <button className='absolute right-0 m-auto  z-10 w-fit h-[100%] p-2 bg-gray-400 font-bold' onClick={()=>settrans(trans-50)}>Last</button>    

        </div>
        </div>
        </>
    );
};

export default Pagation;

export async function getServerSideProps() {

const repo= await axios.get("http://localhost:3000/api/data/")

  return {
    props:{

        prop:repo.data 
    }
  };
}
