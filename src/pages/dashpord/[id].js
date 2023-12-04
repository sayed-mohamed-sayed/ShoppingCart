import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Dashpoardhead from "./header";
import Navpar from "./Navpar";
import axios from "axios";
import { data } from "autoprefixer";
import { useRouter } from "next/router";
export default function Dashpoard({ datat }) {
  const [name, setname] = useState(datat.name);
  const [decribtion, setdecribtion] = useState(datat.decribtion);
  const [price, setprice] = useState(datat.price);
  const [categroy, setcategroy] = useState(datat.categroy);
  const [img1, setfile] = useState(datat.img1);

const router=useRouter()

  async function updatedata(e) {
    e.preventDefault();
    const data = {
      name,
      decribtion,
      price,
      categroy,
      img1,
    };                                                         
    try {
      await axios.put(`${process.env.URL}/api/dataid/${datat._id}`, data);
    } catch (error) {
      console.log(error);
    }
    router.push("/dashpord/Allproduct")
  }
  
  return (
    <>
      <div className="flex  text-center">
        <div className="bg-slate-800 text-center w-1/4 h-screen  text-white  font-black">
          <Dashpoardhead />
        </div>
        <div className="w-9/12 h-4/6 bg-gray-100	">
          <form action="/api/data" method="post">
            <input
              name="name"
              value={name}
              className="w-10/12 mt-3"
              type="text"
              placeholder="Name"
              onChange={(e) => setname(e.target.value)}
            />
            
            <textarea
              value={decribtion}
              name="decribtion"
              className="w-10/12 resize-none m-2"
              placeholder="Describtion"
              onChange={(e) => setdecribtion(e.target.value)}
            />
            <div>
              <input
                name="price"
                value={price}
                type="number"
                className="w-2/5 mr-3"
                placeholder="Price"
                onChange={(e) => setprice(e.target.value)}
              />
              <input
                name="categroy"
                value={categroy}
                type="text"
                className="w-2/5 ml-2"
                placeholder="categroy"
                onChange={(e) => setcategroy(e.target.value)}
              />
              <input
                name="img"
                value={img1}
                type="text"
                placeholder="img"
                className="w-10/12 ml-2"
                onChange={(e) => setfile(e.target.value)}
              />
            </div>
            <button
              className="bg-gray-200 w-1/4 rounded mt-2 font-black"
              onClick={updatedata}
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const updatedata = await axios.get(
    `${process.env.URL}/api/dataid/${context.query.id}`,
    data
  );
  return {
    props: {
      datat: updatedata.data,
    },
  };
}
