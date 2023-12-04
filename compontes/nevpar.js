import Image from "next/image";
import { Inter } from "next/font/google";
import { useState,useContext } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import { useDispatch, useSelector } from 'react-redux';

import nav from "../src/styles/navbar.module.css"
import { useRouter } from "next/router";
import CarteContext from "../usecontext/Context";

export default function Nevpar() {

  const {cart}=useContext(CarteContext)
const cartItems=cart?.cartItems
  const { data: session } = useSession();
  const router=useRouter()

  const url=()=>{
    router.push(`/`)

  }
  return (
    <>
  





<div className='h-32'>



<div className='bg-gray-700 p-2 flex text-white justify-around font-bold align-center'>
<div><h1>BOOKSHOOP</h1></div>
<h2>  Hello&nbsp;
      {session && session.user && session.user.email
        ? session.user.name
        : ""}</h2>
<div>

<nav>
<ul >
<div  className='flex left-0 mt-[80px] bg-gray-600 w-[100%] justify-center absolute  z-10 md:relative md:mt-[0px] md:bg-gray-700' >

<Link href="/progect">

<li className='m-2 cursor-pointer'>Home</li>
</Link>
<Link href="/progect/clock">

<li className='m-2 cursor-pointer'>Clock</li>
</Link>
<li className='m-2 cursor-pointer'>mopil</li>
<li className='m-2 cursor-pointer'>compouter</li>
<Link href="/">

<li className='m-2 cursor-pointer'>ContactUs</li>
</Link>
</div>
</ul>
</nav>
</div>

<div>
<Link href="/">
{
  session?<button onClick={() => signOut()}>Sign out</button>
:<button onClick={url}>Sign in</button>

}
</Link>
</div> 

</div>

<div className='bg-gray-600 p-4 flex text-white justify-between'>

<div className='relative l-16'>
  <Link href="/progect/buycart">
<i className='cursor-pointer text-white'>
<span className='w-10 bg-red-700  rounded-[50%] w-[30px] h-[30px] absolute text-center font-bold p-relative bottom-4 ' >{cartItems?.length}</span>
io</i>
      
      </Link> 

</div>

<div>
<input className='w-64 sm:w-96 lg-96 text-black pl-10' type="Search" placeholder='search '  />
<button className='w-36 bg-[cadetblue]'>Search</button>
</div>
</div>
</div>
</>       
  );
}


  