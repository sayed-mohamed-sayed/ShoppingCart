// @flow strict

import { remove } from '@/redux/cartSlice';
import axios from 'axios';
import * as React from 'react';
import { useEffect ,useState,useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSession } from "next-auth/react";


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from '@stripe/stripe-js';
import CarteContext from '../../../usecontext/Context';
export default function Success() {
  
  const {addaddItemToCart ,cart,delletitemformcart}=useContext(CarteContext)



      



return (
        <>
      <h2 className='m-auto bg-gray-900 text-white w-screen h-20 text-center  font-black  text-2xl' > Congratulations, your purchase was successful. We will contact you as soon as possible</h2>
        </>
          );
};


