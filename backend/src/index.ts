import express from "express"
import { Server } from "socket.io"
import http from "http"
import cors from "cors"

const app = express()
const PORT = 5000

app.use(
  cors({
    origin: "http://localhost:5173",
  })
)

app.use(express.json())

const io = new Server(5001, {
  cors: {
    origin: "http://localhost:5173",
  },
})

const SocketIdToEmail = new Map()
const EmailToSocketIdMap = new Map()

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`)

  socket.on("room:join", (data) => {
    const { roomId, email } = data
    SocketIdToEmail.set(socket.id, email)
    EmailToSocketIdMap.set(roomId, email)
    io.to(socket.id).emit("user:join", { email, id: socket.id })
    socket.join(roomId)
    io.to(socket.id).emit("room:join", { roomId, id: socket.id, email: email })    
  })

})

app.listen(5000, () => {
  console.log(`Server: ${PORT}`)
})
