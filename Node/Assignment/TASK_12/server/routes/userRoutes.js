import express from "express"
import { registerUser,getuser } from "../controllers/userController.js"

const router = express.Router()

router.post("/register", registerUser)

router.get("/get",getuser)

export default router;