import { useState,useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CarteContext from "../../../../usecontext/Context";
import Filter from "./filter";

export default function Clothes({data}) {

    const [quantity,setquantity]=useState(1)
const [filter,setfilter]=useState("all")
console.log(filter);
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



// const proprice=filter==="low"?
// data.sort((a,b)=>a.price-b.price):
// filter==="high"?data.sort((a,b)=>b.price-a.price):
// data.sort((a,b)=>(a.title>b.tilte?1:-1))



  return (
    <div className="block sm:flex md:flex lg:flex ">
    <div className=" w-[100%] sm:w-[250px] ">
<div className=" h-fit sm:h-full  bg-gray-200 sm:bg-gray-200 md:bg-gray-200 lg:bg-gray-200">
<Filter setfilter={setfilter} filter={filter}/>

</div>
</div>
<div className="flex flex-wrap w-[70%] justify-center">
{
            proprice&&proprice.map((i)=>(
              <div className="flex flex-wrap text-center justify-center mt-10" key={i._id}>
              <div className='m-2  basis-30 border-solid border-2 border-[#00000057] p-2 h-92 w-64'>
              <div onClick={()=>rout(i._id)}>
              <Image 
              width="176" height="200"  
              className='cursor-pointer w-44 h-[200px] m-auto mb-4  border-b-2 border-solid border-gray-500' 
              src={i.img1} alt={i.name} />
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

    </div>
  );
}

// export async function getServerSideProps() {
 
// const repo= await axios.get("http://localhost:3000/api/data/")

//   return {
//     props:{

//         prop:repo.data 
//     }
//   };
// }
