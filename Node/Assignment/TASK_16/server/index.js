import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectdb from './config/db.js'
import Route from './route/crudRoutes.js'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.use("/api/crud",Route)

const PORT = process.env.PORT || 3000

connectdb()

app.listen(PORT, ()=> {
    console.log(`The server running at http://localhost:${PORT}`)
})


