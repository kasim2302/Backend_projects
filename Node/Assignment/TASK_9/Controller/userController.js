import mongoose from "mongoose"
import movieData from "../model/userModel.js"

export const createMovieData = async (req,res) =>{
    try{
       const add  = await movieData.create(req.body)

       if(add){
        res.status(201).json({
            msg:"Successfully added"
        })
       }
       else{
        res.status(404).json({
           msg:"Something error"
        })
       }
    }
    catch(err){
    
       console.log("Error",err)
       res.status(404).json({
           msg:"Something error"
        })
    }
}

export const getmoviedata = async (req,res)=>{
    try{
     const getdata =  await movieData.find()
     console.log(getdata)
     if(getdata){
        res.status(200).json({
            mydata:getdata
        })
     }
     else{
        res.status(404).json({
            msg:"Something error"
        })
     }
    }
    catch(err){
        console.log("Error",err)
          res.status(404).json({
            msg:"Something error"
        })
    }
}

export const getById = async (req,res)=>{
    try{

     const {userid} = req.params


    
     const getDataById = await movieData.findById(userid)
     console.log(getDataById)
     if(getDataById){
         return res.status(200).json({
            getDataByid: getDataById.moviename
        })
     }
    

    }
    catch(err){
        console.log("error",err)
        res.status(404).json({
            msg:"something error"
        })
    }
}