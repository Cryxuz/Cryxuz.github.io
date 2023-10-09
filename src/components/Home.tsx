import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import home from '/images/home1.jpg';

const Home = () => {
  const [isH1Visible, setIsH1Visible] = useState(false);
  const [isPVisible, setIsPVisible] = useState(false);

  useEffect(() => {
    const h1Timeout = setTimeout(() => {
      setIsH1Visible(true);
    }, 1800);

    const pTimeout = setTimeout(() => {
      setIsPVisible(true);
    }, 1300);

    return () => {
      clearTimeout(h1Timeout);
      clearTimeout(pTimeout);
    };
  }, []);

  return (
    <div>
      <div
        className="sticky top-0 xl:bg-fixed bg-center bg-cover text-center w-screen h-screen"
        style={{ backgroundImage: `url(${home})` }}
      >
        <Navbar />
        <div className="home h-screen justify-center pt-[40px] md:pt-[70px] lg:pt-[50px]">
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold ${
              isH1Visible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
            }`}
          >
            Kia ora. I'm Paul.
          </h1>
          <br />
          <p
            className={`text-md md:text-2xl lg:text-3xl ${
              isPVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
            }`}
          >
            My goal is to provide users with memorable and efficient interactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;