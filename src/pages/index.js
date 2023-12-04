import Link from "next/link"
import { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { getSession} from "next-auth/react"
import { useRouter } from "next/router"

export default function SignIn(){
  const [name ,setname]=useState('')
  const [email ,setemail]=useState('')
  const [password ,setpassword]=useState('')


const router=useRouter()

  const signingoogle=(e)=>{
    e.preventDefault()
    signIn('google' ,{callbackUrl:"http://localhost:3000"})
  }

async function signcredintels(e){
e.preventDefault()
const data={
  name ,
  email ,
  password
}

const option={
  method:"POST" ,
  headers:{
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),

}

await fetch ("http://localhost:3000/api/auth/signup" ,option)
.then((res)=>res.json())
.then((data)=>{
  if (data) router.push("http://localhost:3000/dashpord")
})
}

    return(
        <div>
        
          <h1 className=" text-center">SignIn</h1>

<form  method="post" className=" text-center flex flex-col w-100	">
<input className="w-4/5 text-slate-400	m-auto bg-gray-50	border-solid	border-black mt-2 border-1 shadow rounded" type="text" placeholder="name" name="name" onChange={(e)=>setname(e.target.value)} />
<input className="w-4/5 text-slate-400	m-auto bg-gray-50	border-solid	border-black mt-2 border-1 shadow rounded" type="email" placeholder="email" name="email" onChange={(e)=>setemail(e.target.value)} />
<input className="w-4/5 text-slate-400	m-auto bg-gray-50	border-solid	border-black mt-2 border-1 shadow rounded" type="password" placeholder="password" name="password" onChange={(e)=>setpassword(e.target.value)} />
<button className="w-80 font-black m-auto" onClick={signcredintels}>SignIn</button>
<div className="border-solid border-slate-300 border-2 w-1/4 m-auto cursor-pointer rounded"   onClick={signingoogle}>
  Sign With Google
</div>
<div>
  have account? 
<Link href="/login"  className="text-red-500">login</Link>

</div>
</form>

        </div>
    )
}