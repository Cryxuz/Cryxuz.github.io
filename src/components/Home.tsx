import home from '../assets/home.jpg'

const Home = () => {
  return (
    <div>
      <div className="bg-fixed bg-center bg-cover text-center " style={{backgroundImage: `url(${home})`}}>
      <div className="h-screen justify-center pt-[220px] md:pt-[190px]">
        
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold '>Kia ora. I'm Paul.</h1>
          <br />
          <p className='text-md md:text-2xl lg:text-3xl'>My goal is to provide users with memorable and efficient interactions."</p>
        
      </div> 
      </div>
    </div>
   
  )
}

export default Home