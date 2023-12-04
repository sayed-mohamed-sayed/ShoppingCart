import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Dashpoardhead() {
  
  return (
    <div>
      dash head
<div className="flex flex-col">

      <Link className="leading-10" href="/dashpord">AddProduct</Link>
      <Link href="/dashpord/Allproduct">AllProduct</Link>
</div>
      
    </div>
  );
}
