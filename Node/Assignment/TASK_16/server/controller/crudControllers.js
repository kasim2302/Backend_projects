import crudModel from "../model/crudModels.js"


export const createData = async (req,res) => {
 
    try {
         const {name,email,age} = req.body

         const createdata = await crudModel.create(req.body)

         res.status(201).json({
            msg: "Data added successfully",
            creatdatas: createdata
         })
    } catch (error) {
        console.log("Error",error)
        res.status(404).json("Error while creating data",error)
    }
}

export const getData = async (req,res) => {
    try {
        const getdata = await crudModel.find()
        res.status(200).json({
            msg: "data fetched successfully",
            getdatas: getdata
        })
    } catch (error) {
        console.log("Error",error)
    }
}

export const getById = async (req,res) => {
    try {
        const getbyid = await crudModel.findById(req.params.id)

        res.status(200).json({
            msg: "data feched successfully",
            getbyid: getbyid
        })
    } catch (error) {
       console.log("Error",error)
       res.status(404).json({
        msg:"data not found"
       })
    }
}

export const updateData = async (req,res) => {

    try {
        const updatedata = await crudModel.findByIdAndUpdate(req.params.id,req.body,{returnDocument : "after"})
        
        if(!updatedata){
            return res.status(404).json({
                msg: "data not found"
            })
        }

        res.status(200).json({
            msg: "data updated successfully",
            updatedata: updatedata
        })
    } catch (error) {
        console.log("error",error)
        res.status(404).json({
            msg: "Invalid data and id"
        })
    }
}

export const deleteData = async (req,res) => {
     
   try {
    
    const deletedata = await crudModel.findByIdAndDelete(req.params.id) 

    if(!deletedata){
        return res.status(404).json({
            msg: "data not found"
        })
    }
    
    res.status(200).json({
        msg: "data deleted successfully",
        deletedata: deletedata
    })
   } catch (error) {
      console.log("Error",error)
      res.status(404).json({
        msg: "data not found"
      })
   }

}



