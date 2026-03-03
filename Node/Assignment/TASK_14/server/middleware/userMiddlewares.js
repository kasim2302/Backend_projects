

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