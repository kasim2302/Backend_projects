import express from 'express'
import userRoutes from "./routes/userRoutes.js"

const app = express()
const PORT = 5000

app.use(express.json())

app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
   console.log(`The Server is running at http://localhost:${PORT}`)
})

