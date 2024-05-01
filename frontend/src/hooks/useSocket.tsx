import { useContext } from "react"
import { SocketContext } from "../context/Socket"
import { Socket } from "socket.io-client"

const useSocket = () => {
  return useContext(SocketContext) as Socket
}

export default useSocket