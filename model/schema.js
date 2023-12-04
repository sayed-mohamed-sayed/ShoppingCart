import mongoose from "mongoose";



const userschema= new mongoose.Schema({

    name:String ,
    decribtion:String ,
    price:String ,
    categroy:String ,
    offer:String ,
    img1:String ,
    img2:String ,
    img3:String ,
    data:{
        type:Date ,
        default:Date.now
    }

})

module.exports=mongoose.models.allData || mongoose.model("allData" ,userschema)