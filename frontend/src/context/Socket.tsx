import { createContext, useContext, useMemo } from "react"
import { Socket, io } from "socket.io-client"

interface Props{
  children: React.ReactNode
}

const SocketContext = createContext<Socket | null>(null)

export const useSocket = () => {
  return useContext(SocketContext)
}

const SocketProvider = ({children}: Props) => {

  const socket = useMemo(() => io("http://localhost:5001"), [])  

  return (
    <>
      <SocketContext.Provider value={socket}>
        {children}
      </SocketContext.Provider>
    </>
  )
}

export default SocketProvider