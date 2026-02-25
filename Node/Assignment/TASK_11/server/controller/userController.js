import Product_model from "../model/userModel.js"

export const addProduct = async (req,res) => {
   try {
      const addproduct = await Product_model.create(req.body)

      res.status(201).json({
        msg:"product data added successfully"
      })
   } catch (error) {
      console.log("Error",error);
      res.status(404).json({
        error:"Product Not found"
      })
      
   }
}

export const getProduct = async (req,res) =>{
   try {
      const getdata = await Product_model.find()

      res.status(200).json({
         getdata:getdata
      })
   } catch (error) {
      console.log("Error",error);
      res.status(404).json({
        error:"Products Not found"
      })
   }
}

export const updateProduct = async (req,res) => {
   try {
      const updatedata = await Product_model.findByIdAndUpdate(req.params.id,req.body)
      res.status(200).json({
         updatedata:updatedata
      })
   } catch (error) {
      console.log("error",error)
   }
}

export const deleteProduct = async (req,res) => {
   try {
      const deletedata = await Product_model.findByIdAndDelete(req.params.id)
      res.status(200).json({
         deletedata:deletedata
      })
   } catch (error) {
      console.log("error",error)
   }
}

