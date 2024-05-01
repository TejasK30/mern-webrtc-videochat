

const Navbar = () => {
  return (
    <>
      <div className="text-gray-100 flex items-center justify-between bg-[blueviolet] w-full h-auto p-2">
        <h1>Videochat</h1>

        <div> 
          {/* `Hello ${user.name}` */}
        </div>

        <div className="flex">
          <button className="bg-red-500 p-2 rounded">logout</button>
        </div>
      </div>
    </>
  )
}

export default Navbar