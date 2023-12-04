import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";


function Navpar() {
    const { data: session } = useSession();
    return (
      <>
    





<div className='h-32'>



<div className='bg-gray-700 p-2 flex text-white justify-around font-bold align-center'>
<div><h1>BOOKSHOOP</h1></div>
<h3>  Hello&nbsp;
        {session && session.user && session.user.email
          ? session.user.name
          : ""}</h3>
<div>

<nav>
<ul className='flex left-0 mt-[80px] bg-gray-600 w-[100%] justify-center absolute  z-10 md:relative md:mt-[0px] md:bg-gray-700' >
<Link href="/">

<li className='m-2 cursor-pointer'>clothess</li>
</Link>
<li className='m-2 cursor-pointer'>shoess</li>
<li className='m-2 cursor-pointer'>mopil</li>
<li className='m-2 cursor-pointer'>compouter</li>
<Link href="">

<li className='m-2 cursor-pointer'>ContactUs</li>
</Link>
</ul>
</nav>
</div>

<div>
<Link href="/">

<button onClick={() => signOut()}>Sign out</button>
</Link>
</div> 

  </div>

<div className='bg-gray-600 p-4 flex text-white justify-between'>

<div className='relative l-16'>
    <Link href="/progect/buycart">
<i className='cursor-pointer text-white'>
<span className='w-10 bg-red-700  rounded-[50%] w-[30px] h-[30px] absolute text-center font-bold p-relative bottom-4 ' >0</span>
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
};

export default Navpar;