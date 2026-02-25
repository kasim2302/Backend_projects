import mongoose from "mongoose";


    const productSchema = new mongoose.Schema({  
          product_Id:{type: Number},  
          product_Name:{type:String , required:true},
          Category:{type:String, required:true},
          product_Price:{type:Number},
          Quantity:{type:Number},
          createdBy:{type:String,default:"Admin"},
          updatedBy:{type:String,default:"Admin"}
        },{timestamps:true})
   

const Product_model = mongoose.model("prouctdata",productSchema)

export default Product_model