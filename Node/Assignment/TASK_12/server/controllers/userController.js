import User from "../models/userModel.js"
import bcrypt from "bcryptjs"

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // Check user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: "User Registered Successfully",
            user: newUser
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        });
    }
};

export const getuser = async (req,res) => {
    try {
        const get = await User.find()

        res.status(200).json({
            getData: get
        })
    } catch (error) {
         console.log("Error",error)
         res.status(404).json({
            msg: "User Not found"
         })
    }
}