import express from "express"
import { createMovieData, getById, getmoviedata } from "../Controller/userController.js"

const router = express.Router()

router.post("/create",createMovieData)

router.get("/get",getmoviedata)

router.get("/getid/:userid",getById)

export default router