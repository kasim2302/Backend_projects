import express from "express"
import connectdb from "./config/db.js" 
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

const PORT  = process.env.PORT || 3000

connectdb()

app.listen(PORT,()=>{
    console.log(`The server running at http://localhost:${PORT}`)
})