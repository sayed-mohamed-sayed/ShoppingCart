import mongoose from "mongoose";



const MongooseSchemas = new mongoose.Schema({
  names:String,
  decribtion: String,
  price: String,
  categroy: String,
  offer: String,
  img1: String,
  data:String
});

module.exports = mongoose.models.Cde || mongoose.model("Cde", MongooseSchemas);
