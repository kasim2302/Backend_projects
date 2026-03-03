import express from 'express'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import cors from 'cors'
import router from './route/userRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api/users",router)

connectdb()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`The server running at http://localhost:${PORT}`)
})