import { useState,useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarteContext from "../../../usecontext/Context";
import Offer from "./offer";

export default function Index({prop}) {

const [quantity,setquantity]=useState(1)

  const {addItemToCart} =useContext(CarteContext)
  
const addToCartHandler=(p)=>{
  addItemToCart({
    product:p._id,
    name:p.name,
    price:p.price,
    categroy:p.categroy,
    offer:p.offer,
    img1:p.img1,
    quantity
  })
}


const router=useRouter()
const rout=(id)=>{
    router.push(`/progect/${id}`)
}



  return (
    <>
    
<Offer/>
<div className="flex flex-wrap justify-center">
{
            prop.map((i)=>(
              <div className="flex flex-wrap text-center justify-center mt-10" key={i._id}>
              <div className='m-2  basis-30 border-solid border-2 border-[#00000057] p-2 h-92 w-64'>
              <div onClick={()=>rout(i._id)}>
              {i.img1&&
              <Image 
              loading="lazy" 
              width="176" height="200"   
              className='cursor-pointer w-44 h-[200px] m-auto mb-4  border-b-2 border-solid border-gray-500' 
              src={i.img1} alt={i.name} />
}
</div>
             <div className="flex justify-around relative">
                 <h1>{i.name}</h1>
         <p>price:{i.price}$<span className='ml-2 text-red-600'>{i.offer}<span className='w-[30px] h-[2px] bg-red-600 top absolute top-[10px] right-[20px]'></span></span></p>
             </div>
             <div className="m-auto">
                 <p>{i.rivew}</p>
             </div>
             <input type="number"  placeholder='quantity' onChange={(e)=>setquantity(e.target.value)}  className='text-black mt-2 mb-2 w-[80%] border-solid	border-[#00000030] border shadow rounded'/>

             <button className="bg-red-900 w-[80%] rounded text-white" onClick={()=>addToCartHandler(i)}>Add to card</button>
                     </div>
                     </div>
            ))
          }</div>
          <ToastContainer/>

    </>
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
