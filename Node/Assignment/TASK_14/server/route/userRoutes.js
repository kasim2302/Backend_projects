import express from 'express'
import { Register ,getuser,login} from '../controller/userControllers.js'
import {Register_Middleware} from '../middleware/userMiddlewares.js'

const router = express.Router()

router.post("/register",Register_Middleware,Register)
router.get("/get",getuser)
router.post("/login",login)

export default router