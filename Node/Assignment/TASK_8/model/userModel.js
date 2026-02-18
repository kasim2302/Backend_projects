import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true,maxLength:8}
},{timestamps:true})

const userModel = mongoose.model('userdatas',userSchema)

export default userModel