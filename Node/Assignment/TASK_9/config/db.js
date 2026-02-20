import mongoose from "mongoose";


const connectdb = async ()=>{
    try{
       const _connect_ = mongoose.connect(process.env.MONGO_URI)
       console.log("Database connected successfully")
    }
    catch(err){
      console.log("Error",err)
    }
}

export default connectdb