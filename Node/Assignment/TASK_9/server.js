import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import router from './routes/userRoutes.js'
const app = express()

dotenv.config()

app.use(express.json())

app.use("/api/movies",router)

connectdb()

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
        console.log(`The server running at http://localhost:${PORT}`)
})
