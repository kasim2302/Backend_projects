

export const getUser = (req,res) => {
    console.log("Params",req.params)
    console.log("Query",req.query)
    console.log("Headers",req.headers)

    res.json({
        message: "GET request received",
        params: req.params,
        query: req.query
    })
}

export const createUser = (req,res) => {
    console.log("Body:" , req.body)

    res.json({
        message: "POST request received",
        body: req.body
    })
}