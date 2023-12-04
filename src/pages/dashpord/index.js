import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Dashpoardhead from "./header";
import Navpar from "./Navpar";
import Image from "next/image";
import axios from "axios";
// special image

import { firebaseConfig, firebaseStorgeUrl } from "../../../pic/index";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { resolve } from "styled-jsx/css";

const app = initializeApp(firebaseConfig, "myShoppingCartApp");
const storage = getStorage(app, firebaseStorgeUrl);

const createuniquefilename = (getfile) => {
  const timestamp = Date.now();
  const rendomstringvalue = Math.random().toString(36).substring(2, 12);

  return `${getfile.name}.${timestamp}.${rendomstringvalue}`;
};

async function helperforuploadimagetofirebase(file) {
  const getfilename = createuniquefilename(file);
  const storagerefrence=ref(storage ,`shopping-cart/${getfilename}`)

const uploadimage=uploadBytesResumable(storagerefrence ,file)
return new Promise((resolve ,reject)=>{
uploadimage.on("state_changed" ,(snapshot)=>{},
(error)=>{
  console.log(error);
  reject(error)
},()=>{
  getDownloadURL(uploadimage.snapshot.ref)
  .then((downloadUrl)=>resolve(downloadUrl))
  .catch((error)=>reject(error))
}


)

})

}




export default function Dashpoard() {
  const [name, setname] = useState("");
  const [decribtion, setdescribtion] = useState("");
  const [price, setprice] = useState("");
  const [categroy, setcategroy] = useState("");
  const [offer, setoffer] = useState("");
  const [img1, setfile1] = useState("");
  const [img2, setfile2] = useState("");
  const [img3, setfile3] = useState("");
  const { data: session } = useSession();


//special image

//img 1
  async function handelimage(event) {
    console.log(event.target.files);
    
    const extractimageurl = await helperforuploadimagetofirebase(
      event.target.files[0]
      );
      setfile1(extractimageurl)
  }

  
//img 2
async function handelimage2(event) {
  const extractimageurl = await helperforuploadimagetofirebase(
    event.target.files[0]
    );
    setfile2(extractimageurl)
}

//img 3
async function handelimage3(event) {
  
  const extractimageurl = await helperforuploadimagetofirebase(
    event.target.files[0]
    );
    setfile3(extractimageurl)
}



async function  AddCart(e){
  const io={
    name ,
    decribtion ,
    price ,
    categroy,
    offer ,
    img1 ,
    img2 ,
    img3
  }
  e.preventDefault()
try {
  
    await axios.post(`${process.env.URL}/api/data` ,io);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
    
    <div className="flex  text-center">
   <div className="bg-slate-800 text-center w-1/4 h-screen  text-white  font-black">
    <Dashpoardhead/>
   </div>
   <div className="w-9/12 h-4/6 bg-gray-100	">

    <form>

    <input name="name" className="w-10/12 mt-3" type="text"  placeholder="Name" onChange={(e)=>setname(e.target.value)}/>
    <textarea name="dsecribtion" className="w-10/12 resize-none m-2" placeholder="Describtion" onChange={(e)=>setdescribtion(e.target.value)} /> 
    <div className="flex w-full justify-center">
    <input name="price" type="number" className="m-1 w-[20%]"  placeholder="Price" onChange={(e)=>setprice(e.target.value)}/>
    <input name="offer" type="text" className="m-1 w-[20%]"  placeholder="offer" onChange={(e)=>setoffer(e.target.value)}/>
    <input name="categroy" type="text" className="m-1 w-[40%]"  placeholder="categroy" onChange={(e)=>setcategroy(e.target.value)}/>
    </div>
    <input name="img1" type="file" placeholder="img-1" className="w-10/12 ml-2"  onChange={handelimage}/>
    <input name="img2" type="file" placeholder="img-2" className="w-10/12 ml-2"  onChange={handelimage2}/>
    <input name="img3" type="file" placeholder="img-3" className="w-10/12 ml-2"  onChange={handelimage3}/>

    <button className="bg-gray-200 w-1/4 rounded mt-2 font-black" onClick={AddCart}>Add Product</button>
    </form>
    <div className="flex justify-center mt-10 center">
    {
        img1&&

    <Image className="m-1 rounded"  src={img1} width='200' height='150'/>
      }{
        img2&&

    <Image className="m-1 rounded"  src={img2} width='200' height='150'/>
      }{
        img3&&

    <Image className="m-1 rounded"  src={img3} width='200' height='150'/>
      }
    
    </div>
   </div>

    </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
