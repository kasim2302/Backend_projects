import http from 'http'

const server = http.createServer()

const port = 5003
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})