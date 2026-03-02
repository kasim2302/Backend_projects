import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

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
        const saltkey = 10

        const hashedPassword = await bcrypt.hash(password, saltkey)

        // const newUser = new User({
        //     name,
        //     email,
        //     password: hashedPassword
        // });

        // await newUser.save();

        const newuser = await User.create({name,email,password: hashedPassword})

        res.status(201).json({
            message: "User Registered Successfully",
            user:newuser
        })

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

export const loginuser = async (req,res) => {


    try {
        
        const {email,password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                msg: "User not found"
            })
        }

        const login_match = await bcrypt.compare(password,user.password)


        const token = await jwt.sign({id:user._id,email:user.email},process.env.SECRET_KEY,{expiresIn: "1h"})

        res.status(200).json({
            msg: "Login Successfully",
            token: token
        })


    } catch (error) {
         console.log("Error",error)
         res.status(500).json({
            msg:"Internal server error"
         })
    }
}