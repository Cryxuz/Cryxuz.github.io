/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import about from '/images/about.jpg';
import { motion, useAnimation } from 'framer-motion';


const About = () => {
  const [, setImageVisible] = useState(false);
  const scrollThreshold = 150; 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
  }, []);

  
  const debounce = (func: TimerHandler, delay:number) => {
    let timer:number;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  const { left, top, bot } = {
    left: useAnimation(),
    top: useAnimation(),
    bot: useAnimation()
  };

  useEffect(() => {
    const handleScroll = debounce(async () => {
      if (window.scrollY > scrollThreshold) {
        setImageVisible(true); 
        setIsVisible(true)
        await left.start({ x: 0 });
        await top.start({y:0})
        await bot.start({y:0})
      }  if (window.scrollY > scrollThreshold) {
        setIsVisible(true)
        
        
      } 
      
      
    }, 0);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [left, bot, top, scrollThreshold]); 

  return (
    <div>
      <div
        className="sticky top-0 xl:bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="lg:grid lg:grid-cols-3">
           <motion.div
            
            className="mx-auto py-[10%] px-[10%] md:px-[5%] lg:pl-[20%] col-span-2"
          >
            <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
            className=" pb-[10%] lg:pb-[5%] text-4xl md:text-5xl font-bold">About Me</motion.h2>
            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3.5 }}

            className=" text-slate-50 text-xl md:text-3xl leading-tight md:leading-relaxed">
              I am a passionate full-stack developer dedicated to creating visually appealing and
              user-centric web applications. I am eager to contribute my expertise to a dynamic team,
              fostering continuous learning and professional growth. I firmly believe that pushing our
              boundaries and embracing challenges with a positive and growth-oriented mindset is the
              key to honing our skills as developers.
            </motion.p>
            <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg mt-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1nK995KxT0Xk8GJb1vRBJdvCQ0KKSThzC/view?usp=drive_link"
              >
                Download CV
              </a>
            </button>
          </motion.div>

           <div className="relative h-80">
                  
                <motion.div
                  initial={{ x: -300 }}
                  animate={left}
                  transition={{ duration: 1 }}
                  className="absolute top-0 left-0 sm:top-[10%] sm:left-[25%] lg:left-[10%] lg:top-[45%]">
                  <img
                    src="/images/1.jpg"
                    alt="Image 1"
                    className={`border-[3px] h-60 w-52 2xl:w-80 2xl:h-80 object-cover rounded-lg shadow-md transform -rotate-6 `}
                  />
                </motion.div>
                  
                <motion.div
                  initial={{ y: -100 }}
                  animate={top}
                  transition={{ duration: 2}}
                  className="absolute top-[40%] right-[15%] sm:top-5 sm:right-[20%] lg:top-[50%]">
                    <img
                      src="/images/2.jpg"
                      alt="Image 2"
                      className={`border-[3px] w-[200px] h-[150px] 2xl:w-52 2xl:h-52 object-cover rounded-lg shadow-md transform rotate-12`}
                    />
                  </motion.div>
                  
                <motion.div
                  initial={{ y: 200 }}
                  animate={bot}
                  transition={{ duration: 3}}
                  className="absolute top-5 left-[30%] sm:top-[0%] sm:left-[13%] lg:left-[5%] lg:top-[90%] 2xl:top-[100%]">
                  <img
                    src="/images/3.jpg"
                    alt="Image 3"
                    className={`border-[3px] w-[180px] h-36 2xl:w-52 2xl:h-52 object-cover rounded-lg shadow-md transform -rotate-12 `}
                  />
                  </motion.div>
                 
                <motion.div
                  initial={{ y: 200 }}
                  animate={bot}
                  transition={{ duration: 2}}
                  className="absolute top-15 right-[3%] sm:top-[25%] sm:right-[35%] lg:top-[100%] 2xl:top-[95%] 2xl:right-[30%]">
                    <img
                      src="/images/4.jpg"
                      alt="Image 4"
                      className={`border-[3px]  w-[150px] h-32 md:w-40 md:h-52 2xl:w-60 2xl:h-60 object-cover rounded-lg shadow-md 2xl:transform 2xl:rotate-12 `}
                    />
                  </motion.div>

                </div>

        </div>
      </div>
    </div>
  );
};

export default About;