"use client"
import { useRouter } from "next/router"
import { createContext, useEffect, useState } from "react"

const CarteContext=createContext()

export const CartProvider=({children})=>{
    const [cart ,setcart]=useState([])
    const router=useRouter()
useEffect(()=>{
setCartToState()
},[])

const setCartToState=()=>{
    setcart(
        localStorage.getItem("cart")
        ?JSON.parse(localStorage.getItem("cart"))
        :[]
    )
}
const addItemToCart=async ({
    product,
    name,
    price,
    offer,
    categroy,
    img1,
quantity
})=>{
const item={
    product,
    name,
    price,
    offer,
    categroy,
    img1,
    quantity
}
const isItemExit=cart?.cartItems?.find(
    (i)=>i.product===item.product
)

let newCartItems ;
if (isItemExit) {
    newCartItems=cart?.cartItems?.map((i)=>
    i.product===isItemExit.product?item :i
    )
}else{
    newCartItems=[...(cart ?.cartItems ||[]),item]
}

localStorage.setItem("cart" ,JSON.stringify({cartItems:newCartItems}))
setCartToState()
}


const delletitemformcart=(id)=>{
    const newCartItems=cart?.cartItems?.filter((i)=>i.product !==id)
    localStorage.setItem("cart" ,JSON.stringify({cartItems:newCartItems}))
    setCartToState()

} 

    return(
        <CarteContext.Provider
        
        value={{
            cart,
addItemToCart,
delletitemformcart
        }}
        >
            {children}

        </CarteContext.Provider>
    )
}

export default CarteContext