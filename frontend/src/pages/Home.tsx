import { useCallback, useEffect, useState } from "react"
import { useSocket } from "../context/Socket"

interface UserJoinData {
  id: string
  email: string
}

interface RoomJoinData{
  roomId: string
  id: string
  email: string
}

const Home = () => {
  const [roomId, setRoomId] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const socket = useSocket()

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      socket?.emit("room:join", { roomId, email })
    },
    [email, roomId, socket]
  )

  const handelUserJoin = useCallback((data: UserJoinData) => {
    const { id, email } = data
    console.log("user join data: ", id, email)
  }, [])

  const handelRoomJoin = useCallback((data: RoomJoinData) => {
    const { roomId, id, email } = data
    console.log("Room join data: ", roomId, id, email)
  }, [])

  useEffect(() => {
    socket?.on("user:join", handelUserJoin)
    socket?.on("room:join", handelRoomJoin)
  }, [handelRoomJoin, handelUserJoin, socket])

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <form
          className="flex flex-col w-full justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-[60%]">
            <label>Room id:</label>
            <input
              type="text"
              placeholder="Enter room"
              className="w-full p-2 outline-none border border-1 border-black rounded-md"
              onChange={(e) => setRoomId(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-[60%]">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 outline-none border border-1 border-black rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="mt-2 py-1 px-3 text-gray-100 bg-black rounded-lg">
            Join
          </button>
        </form>
      </div>
    </>
  )
}

export default Home
