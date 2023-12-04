import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Login(){
  const [name ,setname]=useState('')
  const [email ,setemail]=useState('')
  const [password ,setpassword]=useState('')

const router =useRouter()

async function login(e) {
  e.preventDefault()
  const status=await signIn('credentials' ,{
    redirect:false ,
    email:email ,
    password :password,
    callbackUrl:"/progect"
  })
  if (email==="sayed@gmail.com" ||password==="sayed12345"){
    
    router.push(`${process.env.URL}//dashpord`)
  }else{

    if (status.ok) router.push(status.url)
  }

}

    return(
        <div>
        
          <h1 className=" text-center">Login</h1>

<form  className=" text-center flex flex-col w-100	">
<input className="w-4/5 text-slate-400	m-auto bg-gray-50	border-solid	border-black mt-1 border-1 shadow rounded" type="email" placeholder="email" name="email" onChange={(e)=>setemail(e.target.value)} />
<input className="w-4/5 text-slate-400	m-auto bg-gray-50	border-solid	border-black mt-1 border-1 shadow rounded" type="password" placeholder="password" name="password" onChange={(e)=>setpassword(e.target.value)} />
<button className="  font-black m-auto" onClick={login}>SignIn</button>
<div>
no account?
<Link href="/" className="text-red-500">SignIn</Link>

</div>
</form>

        </div>
    )
}