// @flow strict

import { remove } from '@/redux/cartSlice';
import axios from 'axios';
import * as React from 'react';
import { useEffect ,useState,useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSession } from "next-auth/react";


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from '@stripe/stripe-js';
import CarteContext from '../../../usecontext/Context';
import Buycar from './paymop';
import Buyca from './paymop/gh';

function Buycart({datas,gh}) {
  const {addaddItemToCart ,cart,delletitemformcart}=useContext(CarteContext)
 
  const delletitemformcarts=(id)=>{
    toast.success("item Delete" ,{position:toast.POSITION.TOP_RIGHT})
  
    delletitemformcart(id)
  }
const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)


const {data :session}=useSession()

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [country, setcountry] = useState("");
  const [city, setcity] = useState("");
  const [adress, setadress] = useState("");
  const [datemail, setdataemail] = useState(session&&session.user.email);
  

  const [datadel, setdata] = useState(datas);
  const [fulldata, setfulldata] = useState(cart);


  async function  AddCart(){

  if (name==="" ||email==="" ||phone===""||country===""||city==="" ||adress==="") {
    toast.error(" Please Full Input" ,{position:toast.POSITION.TOP_RIGHT})
setfulldata(false)
  }
  else{

    const dataToSend = {
      name ,
      email,
      phone ,
      country ,
      city ,
      adress,
      data: session && session.user.email
    };
    toast.success("sucess" ,{position:toast.POSITION.TOP_RIGHT})
    try {
      
        await axios.post(`http://localhost:3000/api/adress` ,dataToSend);
      } catch (error) {
        console.log(error);
      }

  }
  }
  


async function delletpost(id){
  try {
    await axios.delete(`http://localhost:3000/api/cart/${id}`)
    const delletedata=datadel.filter((i)=>i._id!==id)
    setdata(delletedata)
    toast.success("dellete item" ,{position:toast.POSITION.TOP_RIGHT})

  } catch (error) {
    console.log(error);
  }
}


const dataadres=gh.filter((i)=>i.data===datemail)
const gf=datadel.find((s)=>s.data===datemail)


// Stripe

const handleCheckout = async() => {

  const lineItems =  cart.cartItems.map((item) => {
   return {
     price_data: {
       currency: 'usd',
       product_data: {
         name: item.name,
         images:[item.img1]
       },
       unit_amount: item.price * 100 // because stripe interprets price in cents
     },
     quantity:item.quantity
   }
  })

  const {data} = await axios.post(`http://localhost:3000/api/checkout`, {lineItems})

  const stripe = await stripePromise

  await stripe.redirectToCheckout({sessionId: data.id})
}

const [handeladres ,sethandeladress]=useState(true)
const  handeladress=()=>{
  if (dataadres) {
    
  }
}



return (
        <>
        <div  className="border-solid border-black border w-[70%] m-auto">
          <div  className="flex justify-center w-[70%] m-auto">

            <input type="text"   className='border-solid border-black border m-1 pl-2 w-[36%]' name='name' value={dataadres?dataadres.name :name} onChange={(e)=>setname(e.target.value)} placeholder='fullname'/>
            <input type="email"  className='border-solid border-black border m-1 pl-2 w-[36%]' name='email' value={dataadres?dataadres.email :email} onChange={(e)=>setemail(e.target.value)} placeholder='email'/>
            <input type="number" className='border-solid border-black border m-1 pl-2 w-[36%]' name='phone' value={dataadres?dataadres.phone :phone} onChange={(e)=>setphone(e.target.value)} placeholder='phone'/>
          </div>
          <div className="flex justify-center w-[70%] m-auto">
            <input type="text" placeholder='country' className='border-solid border-black border pl-2 m-1 w-[50%]' cname='country' value={dataadres?dataadres.country :country} onChange={(e)=>setcountry(e.target.value)}/>
            <input type="text" placeholder='city' className='border-solid border-black border    pl-2 m-1 w-[50%] ' name='city' value={dataadres?dataadres.city :city} onChange={(e)=>setcity(e.target.value)}/>
          </div>
        <div className="w-[70%] m-auto">
          <input type="text" placeholder='adressdetails' className='border-solid border-black border    pl-2 m-1 w-[99%] ' name='adress' value={dataadres?dataadres.adress :adress} onChange={(e)=>setadress(e.target.value)}/>
        </div>
        <div className=' text-center '>

        <button onClick={AddCart} className=' bg-neutral-700 text-white font-black w-[200px] rounded m-auto'>click</button>
        </div>
        </div>
{/* <div className=" text-center m-auto border-solid border-black border p-4 bg-gray-100 w-[70%]  ">
<h3 className='border-solid w-[95%] m-auto  border-black border mb-1   text-[#000000b3] bg-white'>name:{dataadres&&dataadres.name}</h3>
<h5 className='border-solid w-[95%] m-auto  border-black border mb-1   text-[#000000b3] bg-white'>email:{dataadres&&dataadres.email}</h5>
<h6 className='border-solid w-[95%] m-auto  border-black border mb-1   text-[#000000b3] bg-white'>phone:{dataadres&&dataadres.phone}</h6>
<p  className='border-solid w-[95%] m-auto  border-black border mb-1   text-[#000000b3] bg-white'>country:{dataadres&&dataadres.country}</p>
<p  className='border-solid w-[95%] m-auto  border-black border mb-1   text-[#000000b3] bg-white'>city:{dataadres&&dataadres.city}</p>
<div className='m-auto font-bold text-center border-solid border-black border bg-white w-[95%]'>

<button>Up Date info</button>
</div>
</div> */}
<div className="flex flex-wrap justify-center">
{
            cart?.cartItems?.map((i)=>(

              <div className=' w-[100%] mt-12  text-center' key={i.product}>
              <div className='m-2 relative  flex border-solid border-2 border-[#00000057] p-2 h-92 justify-start align-center'>
      
              <Image  className='w-32 h-[150px]  border-b-2 border-solid border-gray-500'  width="1000" height="1000" src={i.img1} alt={i.name}/>
      <div className="font-bold text-black relative left-10">
      <h4 className='mb-6'>name:<span className='text-[#000000b3]'>{i.name}</span></h4>
      <p>price:<span className='text-[#000000b3]'>{i.price}$</span></p>
      <p> quantity:<span className='text-[#000000b3]'>{i.quantity}$</span></p>
      </div>
      <button className='bg-[crimson] text-white w-24 h-6 rounded absolute right-5 font-bold'  onClick={()=>delletitemformcarts(i.product)}>remove to card</button>
      </div>
    </div>
            ))
          }
          
          {/* <button disabled={!session} onClick={handleCheckout} className='bg-slate-800 w-[80%] fixed shadow-md shadow-gray-700 bottom-8 font-black text-white rounded h-10 hover:bg-slate-700'>checkout</button> */}
         {
          !session&&<p className='  absolute bottom-2  text-[red] '>Please enter email</p>
         }
          <ToastContainer/>
          {
           
          // <Buycar  df={cart.cartItems} name={name} email={email} phone={phone} country={country} city={city} adress={adress} />
        }
        <Buyca df={cart.cartItems} name={name} email={email} phone={phone} country={country} city={city} adress={adress}/>  

          </div>
        </>
          );
};



export default Buycart;

export async function getServerSideProps() {
  const data= await axios.get("http://localhost:3000/api/cart/")
  const dat= await axios.get("http://localhost:3000/api/adress/")

return {
props:{
  datas:data.data,
  gh:dat.data
}

}

}


  