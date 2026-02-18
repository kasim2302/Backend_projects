import userModel from "../model/userModel.js"

export const addData = async (req,res)=>{
     try{
        console.log(req.body)

        const {fullName,email,password} = req.body

        const add_user = await userModel.create({fullName,email,password})

        res.status(201).json({
        message: "Successfully Added in the Database"
        })
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({
            message:"Something error",err
        })
    }
   
}

export const getData = async (req,res) =>{
    try{
        const get_Data = await userModel.find()
        console.log(get_Data)
        res.status(200).json({get_Data})
    }
    catch(err){
        console.log("error",err)
        res.status(500).json({
          msg:"something error",err
        })
    }
}