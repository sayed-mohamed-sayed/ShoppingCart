import mongoose from "mongoose";

async function Contact() {
    
    try {
        
        await mongoose.connect("mongodb+srv://sayedd:sayedd@cluster0.oggt8kh.mongodb.net/")
    } catch (error) {
        console.log(error);
    }
}

export default Contact