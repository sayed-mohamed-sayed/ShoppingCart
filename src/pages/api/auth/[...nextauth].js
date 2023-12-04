import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import connect from "../../../../database/contact"
import User from "../../../../modelregister/schema"


export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }),

          CredentialsProvider({
name:"Credentials" ,
async authorize(Credentials ,req){
    connect()
const result= await User.findOne({email:Credentials.email})
if (!result) {
    throw new Error("No result")
 
}
const checkpass=await compare(Credentials.password ,result.password)


if (!checkpass ||result.email!==Credentials.email) {
    throw new Error("No result")
   } 
  
   return result

}

})

    ]


})