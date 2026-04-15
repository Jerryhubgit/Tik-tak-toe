## Socket IO
`Socket IO` is a Javascript library that lets frontend and backend talk to each other in realtime, unlike `http` that opens and closes a connection, socketio keeps it consistent

In the most base level
- we create a `request handler` with express
- Turn it into a real TCP server 
- Turn it into to a Websocket using `socket.io`

```Javascript
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

// Request handler - app
const app = express()

// turning into a real TCP server
const server = http.createServer(app)

// turning into a websocket 
const io = new Server(server)


const PORT = 3000

// server.listen not app.listen
server.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}`)
})
```
Notice `server` is the websocket here and not `app` which is an http
You connect your client to the socket like this above the script for your main frontend javascript
```Javascript
<script src="/socket.io/socket.io.js"></script>
```
then access it from your the main frontend 
```Javascript
const socket = io()
```
- Socket - User
- io - Server
- 'connection' - event

```Javascript
io.on('connection', (socket) => {
    console.log('User connected', socket.id)
})
```
This says when the `user (socket)` connects to the `Server (io)` print the `User Connected` and generate a random `id: socket.id` 