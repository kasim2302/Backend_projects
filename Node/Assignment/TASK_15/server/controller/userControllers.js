import USER from '../model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const Register = async (req,res) => {
    
    try {

        const {name,email,password} = req.body

        const checkEmail = await USER.findOne({email})

        if(checkEmail){
            return res.status(400).json({
                msg: "User Already Exists"
            })
        }

        const saltkey = 10

        const hashedPassword =  await bcrypt.hash(password,saltkey)


        const adduser = await USER.create({name,email,password:hashedPassword})

        console.log(adduser)
        res.status(201).json({
            msg:"User Registered Successfully",
            adduser: adduser
        })


        
    } catch (error) {
         console.log("Error",error)
         res.status(500).json({
            msg:"Internal server error"
         })
    }

}

export const getuser = async (req,res) => {
     
    try {

        const get = await USER.find()

        res.status(200).json({
            getuser1:get
        })
    } catch (error) {
        console.log("Error",error)
        res.status(404).json({
            msg:"users not found"
        })
    }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body

    const checkemail = await USER.findOne({ email })

   
    if (!checkemail) {
      return res.status(401).json({
        msg: "User not found"
      });
    }

   
    const ismatch = await bcrypt.compare(password, checkemail.password)

    if (!ismatch) {
      return res.status(401).json({
        msg: "Invalid credentials"
      })
    }

  
    const token = jwt.sign(
      { id: checkemail._id, email: checkemail.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

 
    res.status(200).json({
      msg: "Logged in Successfully",
      token
    });

  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      msg: "Server Error"
    });
  }
}

export const getData = async (req,res) => {

  try {
     const getdata = await USER.find()
     res.status(200).json({
      getdatas : getdata
     })
  } catch (error) {
    console.log("Error",error)
    res.status(404).json({
      msg:"data not found"
    })
  }
}