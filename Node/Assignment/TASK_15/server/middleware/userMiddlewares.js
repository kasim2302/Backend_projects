import jwt from 'jsonwebtoken'

export const Register_Middleware = async (req,res,next) => {
    try {
        
       const {name,email,password} = req.body

       if(!name || !email || !password){
        
        return res.status(404).json({
            msg:"The datas should be non-empty."
        })

       }
       next()
    } catch (error) {
        console.log("Invalid data",error)
        res.status(404).json({
            msg:"Something error"
        })
    }
}

export const verifydata = async (req,res,next) => {
   
    try {
        const token  = req.headers.authorization
  
        if(!token){
            return res.status(404).json({
                msg:"unauthorized access detected"
            })
        }

        const decode  = jwt.verify(token,process.env.SECRET_KEY)

        req.jwtuser = decode

        next()

    } catch (error) {
        console.log("error",error)
        res.status(404).json({
            msg:"Not a valid user"
        })
    }

   
}