import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import home from '/images/home1.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slideVariants = {
    hidden: { y: 100 },
    visible: { y: 0, transition: { duration: 2 } },
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="sticky top-0 xl:bg-fixed bg-center bg-cover text-center  lg:h-screen"
        style={{ backgroundImage: `url(${home})` }}
      >
        <Navbar />
        <div className="home h-screen justify-center pt-[40px] md:pt-[70px] lg:pt-[100px]">
          <motion.h1
            variants={slideVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold `}
          >
            Kia ora. I'm Paul.
          </motion.h1>
          <br />
          <motion.p
            variants={slideVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className={`text-md md:text-2xl lg:text-3xl mx-[20%]`}
          >
          My goal is to provide users with memorable and efficient interactions while continuously learning new programming languages and technologies.          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;