import express from 'express'

const app = express()
const PORT = 5000

app.use(express.json())

app.get('/',(req,res) => {
    res.send("Server Running")
})

app.listen(PORT, ()=>{
    console.log(`Server Started on http://localhost:${PORT}`)
})