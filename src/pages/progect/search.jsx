import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

export default function Search({prop}) {
    console.log(prop);
  return (
    <div className="w-[100%] h-[100%]">
lllllllllllllllllllllllllllllllllll    
    
    </div>
  );
}

  
  
export async function getServerSideProps() {

    const repo= await axios.get("http://localhost:3000/api/data/")
    
      return {
        props:{
    
            prop:repo.data 
        }
      };
    }
    