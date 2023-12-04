// @flow strict

import * as React from 'react';
import { createSlice } from '@reduxjs/toolkit';



const createslice=createSlice({

    name:"Cart" ,
    initialState:{
        data:[],
     
    },
    reducers:{
        add(state ,action){
            state.data.push(action.payload)
            localStorage.setItem("buy", JSON.stringify(state.data))

        }
        ,
        remove(state ,action){
           state.data=state.data.filter((i)=>i._id!==action.payload)
        }
    }
})




export const {add,remove}=createslice.actions;
export default createslice.reducer