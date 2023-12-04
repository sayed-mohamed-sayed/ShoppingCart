import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Nevpar from "./nevpar"
import Fotter from "./fotter";
import { GlopalProvider } from "../GlopalProvider";
const inter = Inter({ subsets: ["latin"] });

export default function Layout(props) {
  return (
    <div>
    <GlopalProvider>
    <Nevpar/>
    {props.children}
    <Fotter/>    
    </GlopalProvider>
    </div>
  );
}

  