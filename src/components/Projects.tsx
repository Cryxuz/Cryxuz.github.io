const Projects = () => {
  return (
    <div className='bg-gray-800 px-[15%]'>
      <div>
        <h2 className="py-[10%] font-extrabold text-[42px] md:text-[48px]">Some of my latest work.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] pb-[10%]">
          <div>
            <img className="rounded-md" src="src/assets/todo.png" alt="" />
          </div>
          <div>
          <h2 className="text-4xl md:text-[44px] font-semibold">Title</h2>
            <p className="md:text-2xl">description</p>
          </div>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] pb-[10%]">

        <div>
            <h2 className="text-4xl md:text-[44px] font-semibold">Title</h2>
            <p className="md:text-2xl">description</p>
          </div>
          <div>
            <img className="rounded-md" src="src/assets/todo.png" alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] pb-[10%]">
          <div>
            <img className="rounded-md" src="src/assets/todo.png" alt="" />
          </div>
          <div>
          <h2 className="text-4xl md:text-[44px] font-semibold">Title</h2>
            <p className="md:text-2xl">description</p>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Projects