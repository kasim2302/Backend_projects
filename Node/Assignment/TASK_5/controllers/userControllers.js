

export const createuser = (req,res) => {
    const {name,email} = req.body

    console.log("Body",req.body)

    res.json({
        message: "User Created",
        name,
        email
    })
}

export const getUserById = (req,res) => {
    
    const id = req.params.id

    console.log("Params",req.params)

    res.json({
        message: "User Fetched",
        userId: id
    })
}

export const searchUser = (req,res) =>{
     const {name,age} = req.query

     console.log("Query",req.query)

     res.json({
        message: "user search  result",
        name,
        age
     })
}

export const updateuser = (req,res) => {
    const id = req.params.id
    const{name} = req.body

    res.json({
        message: "user updated",
        userId: id,
        updatedName: name
    })
}