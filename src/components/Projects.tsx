import about from '/images/about.jpg';
const Projects = () => {
  
  
  return (
    <div className="sticky top-0 lg:bg-fixed bg-center bg-cover px-[10%]" style={{backgroundImage: `url(${about})`}} >
      <div>
        <h2 className="py-[10%] font-extrabold text-[42px] md:text-[48px] text-center">Some of my latest work.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] pb-[10%]">
          <div>
            <img className="rounded-xl w-[80%]" src="images/todo.png" alt="" />
          </div>
          <div>
          <h2 className="text-4xl md:text-[40px] font-semibold hover:text-emerald-400"><a href="http://paul-tan-to-do-list.devacademy.nz/" target="_blank">Todo List</a></h2>
          <br />
            <p className="md:text-2xl">Introducing my user-friendly todo list, designed to effortlessly assist you in managing your daily tasks and priorities, so you can stay organized and boost your productivity with ease.</p>
            <br />
            <ul className="hidden lg:flex flex-wrap items-center space-x-2 gap-[5px]">
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ HTML</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ CSS</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ JavaScript</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ React</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ Express</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ NodeJs</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TypeScript</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ SQLite3</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] pb-[10%]">
          <div>
          <div>
            <img className="rounded-xl w-[80%] block md:hidden m-[5%]" src="/images/donut.png" alt="" />
          </div>
          <h2 className="text-4xl md:text-[40px] font-semibold hover:text-emerald-400"><a href="https://tiffs-donuts.devacademy.nz/" target="_blank">Tiffs Donut <span className="text-2xl">(Group Project)</span></a></h2>
          <br />
            <p className="md:text-2xl">
              This donut shop group project primarily centers around the acquisition and application of skills related to threeJS and tailwind, with a strong emphasis on learning and practical application. </p>
            <br /> 
            <ul className="hidden lg:flex flex-wrap items-center space-x-2 gap-[5px]">
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ HTML</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ CSS</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ JavaScript</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ React</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ Express</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ NodeJs</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TypeScript</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ SQLite3</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ ThreeJS</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TailwindCSS</li>
            </ul>
          </div>
          <div>
            <img className="rounded-xl  hidden md:block" src="images/donut.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects