
import Navbar from './Navbar';
import home from '/images/home1.jpg';

const Home = () => {


  return (
    <div>
      <div
        className="sticky top-0 xl:bg-fixed bg-center bg-cover text-center w-screen h-screen"
        style={{ backgroundImage: `url(${home})` }}
      >
        <Navbar />
        <div className="home h-screen justify-center pt-[40px] md:pt-[70px] lg:pt-[50px]">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold`}
          >
            Kia ora. I'm Paul.
          </h1>
          <br />
          <p
            className={`text-md md:text-2xl lg:text-3xl `}
          >
            My goal is to provide users with memorable and efficient interactions.
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default Home;