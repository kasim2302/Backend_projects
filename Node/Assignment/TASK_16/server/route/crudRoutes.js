import express from 'express'
import { createData ,getData, getById,updateData,deleteData} from '../controller/crudControllers.js'
const Route = express.Router()

Route.post("/create",createData)

Route.get("/read",getData)

Route.get("/readbyid/:id",getById)

Route.put("/update/:id",updateData)

Route.delete("/delete/:id",deleteData)



export default Route