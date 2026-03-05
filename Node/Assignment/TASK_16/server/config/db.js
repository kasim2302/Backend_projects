import mongoose from 'mongoose'

const connectdb = async () => {
    
    try {
        
        const conne = await mongoose.connect(process.env.MONGO_URL)

        console.log(`The Database connected Successfully`)

    } catch (error) {
         console.log("Error while connecting database!",error)
    }
}

export default connectdb