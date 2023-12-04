import Image from "next/image";
import { useState,useEffect } from "react";
function Offer() {   
  const [num, setnum] = useState(0);
  
  const handel=(direction)=>{
    if (direction==="left") {
      setnum(num+1)
    }
    if (direction==="right") {
      setnum(num-1)
    }
   
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setnum((prevNum) => (prevNum + 1) % 4);
      }, 40000);
  
      return () => {
        clearInterval(interval);
      };
    }, [40000]);


    return (
    <div className='h-[400px] w-[100vw] overflow-hidden relative'>
  <button className={`absolute top-[50%] bg-blue-900 text-white font-bold  z-10 w-12 h-12 left-4 rounded-full text-[x-large] ${num===2?'cursor-not-allowed':'cursor-pointer'}`} disabled={num===2} onClick={()=>handel("left")}>+</button>
    <div className="w-screen h-[400px]  flex h-64 relative transition ease-in-out delay-100" style={{ transform:` translateX(${num*-100}vw)`}}>
        <Image loading="lazy"   src='/2.webp' className="w-[100%]" width="1000" height="100" alt="Shopping cart"/>
        <Image loading="lazy"  src='/4.webp' className="w-[100%]" width="1000" height="100" alt="Shopping cart" />
        <Image loading="lazy"  src='/9.webp' className="w-[100%]" width="1000" height="100" alt="Shopping cart" />

    </div>
    <button className={`absolute top-[50%] bg-blue-900 text-white font-bold  z-10 w-12 h-12 right-8 rounded-full text-[x-large] ${num===0?'cursor-not-allowed':'cursor-pointer'}`} disabled={num==0} onClick={()=>handel("right")} >-</button>
    </div>
    
    );
};

export default Offer;