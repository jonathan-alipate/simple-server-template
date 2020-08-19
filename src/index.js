const express = require('express')
const server = express()
const port = 3000
const path = require('path')

server.listen(port, () => {
    console.log('server is listening on port ' + port)
})

server.use(express.static(path.join(__dirname, 'public')))