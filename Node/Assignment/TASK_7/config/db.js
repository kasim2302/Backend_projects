import mongoose from "mongoose";

const connectdb = async ()=>{
    try{
      const conne = await mongoose.connect(process.env.MONGO_URI)

      console.log("database connected successfully")
    }
    catch(err){
      console.log("Something went wrong",err)
    }
}

export default connectdb