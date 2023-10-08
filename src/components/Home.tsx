import dev from '../assets/dev.jpg'

const Home = () => {
  return (
    <div>
      <div className="bg-fixed bg-center bg-cover" style={{backgroundImage: `url(${dev})`}}>
         <div className="h-[600px] bg-opcity-75 flex justify-center"></div>
      </div>
    </div>
   
  )
}

export default Home