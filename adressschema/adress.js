import mongoose from "mongoose";



const MongooseSchemas = new mongoose.Schema({
  name: String,
  email: String,
  country: String,
  city: String,
  phone: String,
  adress:String,
  data:String
});

module.exports = mongoose.models.adr || mongoose.model("adr", MongooseSchemas);
