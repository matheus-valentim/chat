const express = require("express")
const http = require('http')
const {Server} = require('socket.io')
const helmet = require('helmet')
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(helmet.noSniff())
app.use('/', express.static(__dirname + '/public'))
app.use('/emoji', express.static(__dirname + '/node_modules/@joeattardi/emoji-button/dist'))

app.get('/', (req,res) => res.sendFile(__dirname + '/index.html'))

io.on('connection', socket => {
    console.log('usuário conectado')
    socket.on('enviar', (msg)=>{
        console.log(socket.id)
        console.log(msg)
        socket.broadcast.emit('enviar', msg)
    })
})
server.listen(3000, ()=> console.log('servidor na porta 3000'))