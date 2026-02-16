import express from "express"

const app = express()
const PORT = 5000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Success done")
})

app.post("/create",(req,res)=>{
    res.status(201).json({
        "message":"message created successfully"
    })
})

app.get("/user",(req,res)=>{
    res.status(200).json({
        "success": true,
        "message": "user data fetched successfully",
        "data":{
            "name":"Sarvanan",
            "role": "Backend Developer"
        }

    })
})

app.post("/submit",(req,res)=>{
    const userData = req.body

    res.status(200).json({
        "success": true,
        "message": "Data Received Successfully",
        "receivedData": userData
    })
})

app.get("/custom",(req,res)=>{

    res.set("gymapp","MygymApp")

    res.status(200).json({
        "success": true,
        "message": "Custom header sent successfully"
    })
})

app.get("/success",(req,res)=>{

    res.status(200).json({
        "message":"Operation successful"
    })
})

app.get("/profile",(req,res)=>{
    res.status(200).json({
        "name": "Raja",
        "role": "Backend Developer",
        "experience": 3
    })
})

app.post("/create-user",(req,res)=>{
    const user  = req.body
    res.status(201).json({
        "message":"User Created Successfully",
        "UserData":user
    })
})

app.get("/error",(req,res)=>{
    
    res.status(500).json({
        "error":"Internal server error"
    })
})

app.get("/header",(req,res)=>{
    res.set("App-Name","MyExpressApp")

    res.status(200).json({
        "message":"header sent successfully"
    })
})

app.get("/check",(req,res)=>{

    const {role} = req.query
    if(role === "admin"){
        return res.status(200).json({
            "message":"Access Granted"
        })
    }
    else{
        return res.status(403).json({
            "message":"Access Denied"
        })
    }
})

app.listen(PORT,()=>{
    console.log(`The server running at http://localhost:${PORT}`)
})