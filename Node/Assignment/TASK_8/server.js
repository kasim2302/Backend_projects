import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectdb from './config/db.js'
import Route from './routes/userRoutes.js'
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.use("/api/user",Route)

connectdb()

const PORT = process.env.PORT || 3000 

app.listen(PORT,()=>{
    console.log(`The server running at http://localhost:${PORT}`)
})

