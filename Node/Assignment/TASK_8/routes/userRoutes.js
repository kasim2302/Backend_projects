import express from 'express'

import { addData,getData } from '../controllers/userController.js'

const Route = express.Router()

Route.post("/add",addData)
Route.get("/get",getData)

export default Route