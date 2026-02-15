import express from "express"
import { createuser,getUserById,searchUser,updateuser } from "../controllers/userControllers.js"

const router = express.Router()

router.post("/create",createuser)

router.get("/:id",getUserById)

router.get("/search/user",searchUser)

router.put("/:id",updateuser)

export default router