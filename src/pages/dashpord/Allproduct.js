import Link from "next/link";
import { useState } from "react";
import Dashpoardhead from "./header";
import axios from "axios";
import Image from "next/image";
export default function Dashpoard({datas}) {

  const [data ,setdata]=useState(datas)

async function deletepost(id) {
  try {
    await axios.delete(`${process.env.URL}/api/dataid/${id}`)
    
    const dataf=data.filter((i)=>i._id!==id)
    setdata(dataf)
  
} catch (error) {
  console.log(error);
}
}

  return (
    <>
      <div className="flex  text-center">
        <div className="bg-slate-800 text-center w-1/4 h-screen  text-white  font-black">
          <Dashpoardhead />
        </div>
        <div className="w-9/12 h-4/6 bg-gray-100	">
          <h1>All Product</h1>
<div className="flex flex-wrap justify-center">
          {
            data.map((i)=>(

          <div key={i._id} className="w-100% ">
            <div className=" m-2 bg-white p-2 w-[200px] h-[200px]">
              <Image src={i.img1} width='230' height='200'/>
              <div className="flex justify-around mt-2">
                <h3>{i.name}</h3>
                <p>{i.price}$</p>
              </div>

              <div className="flex justify-around mt-4">
                <Link href={`/dashpord/${i._id}`}>
                <button className="bg-red-900 w-28 rounded text-white">Update</button>
                </Link>
                <button className="bg-red-900 w-28 rounded text-white" onClick={()=>deletepost(i._id)}>Delete</button>
              </div>
            </div>{" "}
          </div>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response= await axios.get(`${process.env.URL}/api/data/`)

  return{
    props:{
      datas:response.data
    }
  }
}




