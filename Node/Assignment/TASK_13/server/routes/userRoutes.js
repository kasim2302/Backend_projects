import express from "express"
import { registerUser,getuser,loginuser } from "../controllers/userController.js"

const router = express.Router()

router.post("/register", registerUser)

router.post("/login",loginuser)

router.get("/get",getuser)

export default router;