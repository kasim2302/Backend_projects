import express from "express"

const app = express()

const PORT = 3000



app.get("/",(req,res)=>{
    res.send("Welcome to my server")
})

app.listen(PORT,()=>{
    console.log(`The server running at http://localhost:${PORT}`)
})