import home from '../assets/home.jpg'

const Home = () => {
  return (
    <div>
      <div className="bg-fixed bg-center bg-cover text-center pt-[120px] md:p-[15%] xl:p-[10%]" style={{backgroundImage: `url(${home})`}}>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold'>Kia ora, I'm Paul.</h1>
        
        <p className='text-md md:text-2xl lg:text-3xl'>My goal is to provide users with memorable and efficient interactions."</p>
      <div className="h-screen bg-opcity-75 flex justify-center"></div>
         
      </div>
    </div>
   
  )
}

export default Home