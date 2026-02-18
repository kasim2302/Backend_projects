import mongoose from "mongoose";

export const connectdb = async () => {
    try{
      const con = await mongoose.connect(process.env.MONGO_URI)
      console.log("Database connected Successfully")
    }
    catch(err){
      console.log("Something went wrong",err)
    }
}

export default connectdb