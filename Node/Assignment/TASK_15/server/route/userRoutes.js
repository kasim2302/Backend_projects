import express from 'express'
import { Register ,getuser,login,getData} from '../controller/userControllers.js'
import {Register_Middleware,verifydata} from '../middleware/userMiddlewares.js'

const router = express.Router()

router.post("/register",Register_Middleware,Register)
router.get("/get",getuser)
router.post("/login",login)
router.get("/dashboard",verifydata,getData)

export default router