import Link from "next/link";
import { useState,useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarteContext from "../../../usecontext/Context";


export default function Dashpoard({i}) {
    
  const [img ,setimg]=useState(`${i.img1}`)
  const {data :session}=useSession()

   
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
  async function  AddCart(item){

    const dataToSend = {
      names: item.name,
      decribtion: item.decribtion,
      price: item.price,
      categroy: item.categroy,
      offer: item.offer,
      img1: item.img1,
      data: session && session.user.email,
    };
    toast.success("sucess" ,{position:toast.POSITION.TOP_RIGHT})
    try {
      
        await axios.post(`http://localhost:3000/api/cart` ,dataToSend);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
    
   
<div className=' contaner block md:flex md:justify-around  w-[100%] mt-12 '>
        
    <div className="w-[60%] m-auto mb-10 md:w-[38%] rounded text-center border-solid border-[#0000004d] border ">
      <div>
        <Image  className="w-[80%] h-44  m-auto border-solid border-[#0000004d] border-b-2 mb-6" src={img} width="1000" height="1000" alt={i.name} />
      </div>
    <div className="flex justify-center m-auto">
    <Image className='w-[30%] m-1 border-solid border-[#0000005e] border  h-24'  width="1000" height="1000" onClick={()=>setimg(`${i.img1}`)} src={i.img1} alt={i.name}/>
    <Image className='w-[30%] m-1 border-solid border-[#0000005e] border  h-24'  width="1000" height="1000" onClick={()=>setimg(`${i.img2}`)} src={i.img2} alt={i.name}/>
    <Image className='w-[30%] m-1 border-solid border-[#0000005e] border  h-24'  width="1000" height="1000" onClick={()=>setimg(`${i.img3}`)} src={i.img3} alt={i.name}/>

    </div>

    </div>
    <div className="w-[60%] m-auto md:w-[59%]">
        <div className="w-[100%] rounded border-solid border-[#0000004d] border-[1px] p-2">
<p>{i.decribtion}</p>
        </div>
        <div className="flex justify-around mt-4">
<h5 className='font-black'>{i.name}</h5>
<p className='font-bold'> price:<span>{i.price}$</span></p>
        </div>
        <div className=" text-center mt-2">
{/* <p>@@@@@</p> */}
        </div>
        <div className="flex justify-around align-top ">
        <input type="number"  placeholder='quantity' onChange={(e)=>setquantity(e.target.value)}  className='text-black  w-[30%] border-solid	border-[#00000030] border shadow rounded'/>

<button className='w-[60%] bg-[cadetblue] rounded  text-white font-black ' onClick={()=>addToCartHandler(i)}>Add Cart</button>
        </div>
    </div>
    </div>    <ToastContainer/>

    </>
  );
}

export async function getServerSideProps(context) {
 
const repo= await axios.get(`http://localhost:3000/api/dataid/${context.query.id}`)

  return {
    props:{

        i:repo.data 
    }
  };
}
