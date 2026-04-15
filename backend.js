const express = require('express')
const http = require('http'); 
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server)


app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log('User Connected: ', socket.id)

    socket.on('sendMessage', (data) => {
        console.log('User Message: ', data)
        
        io.emit('receiveMessage', data )
    })

    socket.on('disconnect', () => {
        console.log('User disconnected', socket.id)
    })
})



const PORT = 8080
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})