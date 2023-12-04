// @flow strict

import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Clothes from './Clothes';
function Filter({setfilter,filter}) {


    
    const changefilterprice=(e)=>{
        setfilter(e.target.id)
    }

return (
        <>
        <div className='relative'>
        <div >
    
    <div className="">
                <div className="font-black p-2">Filter by price</div>
    
    <div className="font-bold pl-2  mb-2">
        <input className='cursor-pointer' value={filter} onChange={changefilterprice}  type="radio" name="fillter" id="select" />
    <label htmlFor="all">In no order</label>
        </div>
</div><div className="font-bold pl-2 mb-2">
    <input className='cursor-pointer' value={filter}  onChange={changefilterprice} type="radio" name="fillter" id="low" />
    <label htmlFor="all">From lowest to highest</label>
</div><div className="font-bold pl-2 mb-2">
    <input className='cursor-pointer' value={filter}  onChange={changefilterprice} type="radio" name="fillter" id="high" />
    <label htmlFor="all">From highest to lowest</label>
</div>
            </div>    
        </div>
        </>
    );
};

export default Filter;

export async function getServerSideProps() {

const repo= await axios.get("http://localhost:3000/api/data/")

  return {
    props:{

        prop:repo.data 
    }
  };
}
