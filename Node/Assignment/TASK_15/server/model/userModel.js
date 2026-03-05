import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String , unique: true},
    password: {type:String}
})

const USER = mongoose.model("USER",userSchema)

export default USER