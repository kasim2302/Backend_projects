import express from 'express'
import { addProduct, getProduct, updateProduct,deleteProduct } from "../controller/userController.js"

const Route = express.Router()

Route.post("/add",addProduct)
Route.get("/get",getProduct)
Route.put("/update/:id",updateProduct)
Route.delete("/delete/:id",deleteProduct)






export default Route