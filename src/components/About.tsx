import React, { useState, useEffect } from 'react';
import about from '../assets/about.jpg'


const About = () => {
  const [isImageVisible, setImageVisible] = useState(false);
  const scrollThreshold = 150;
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setImageVisible(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="bg-fixed bg-center bg-cover " style={{backgroundImage: `url(${about})`}}>
          <div className='lg:grid lg:grid-cols-3'>
              <div className={`py-[10%] px-[10%] md:px-[5%] lg:pl-[20%] col-span-2 bg-opcity-75 ${
                      isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    } ease-in-out duration-[3000ms]`} >
                <h2 className='pb-[10%] lg:pb-[5%] text-4xl md:text-5xl font-bold'>About Me</h2>
                <p className='text-slate-50 text-xl md:text-3xl leading-tight md:leading-relaxed '>I am a passionate full-stack developer dedicated to creating visually appealing and user-centric web applications. I am eager to contribute my expertise to a dynamic team, fostering continuous learning and professional growth. I firmly believe that pushing our boundaries and embracing challenges with a positive and growth-oriented mindset is the key to honing our skills as developers.</p>
              </div>
              
                <div className="relative h-80">
                  
                  <div className="absolute top-0 left-0 sm:top-[10%] sm:left-[25%] lg:left-[10%] lg:top-[45%]">
                  <img
                    src="/images/1.jpg"
                    alt="Image 1"
                    className={`border-[3px] h-60 w-52 2xl:w-80 2xl:h-80 object-cover rounded-lg shadow-md transform -rotate-6 ${
                      isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20' 
                    } ease-in-out duration-[1500ms]`}
                  />
                  </div>

                  <div className="absolute top-5 right-0 sm:top-5 sm:right-[20%] lg:top-[50%]">
                    <img
                      src="/images/2.jpg"
                      alt="Image 2"
                      className={`border-[3px] w-[200px] h-[150px] 2xl:w-52 2xl:h-52 object-cover rounded-lg shadow-md transform rotate-12 ${
                        isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                      }  ease-in-out duration-[3000ms]`}
                    />
                  </div>

                  <div className="absolute top-5 left-[20%] sm:top-[0%] sm:left-[13%] lg:left-[5%] lg:top-[90%] 2xl:top-[100%]">
                  <img
                    src="/images/3.jpg"
                    alt="Image 3"
                    className={`border-[3px] w-[180px] h-36 2xl:w-52 2xl:h-52 object-cover rounded-lg shadow-md transform -rotate-12 ${
                      isImageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                    } ease-in-out duration-[3000ms]`}
                  />
                  </div>

                  <div className="absolute top-15 right-0 sm:top-[25%] sm:right-[35%] lg:top-[100%] 2xl:top-[95%] 2xl:right-[30%]">
                    <img
                      src="/images/4.jpg"
                      alt="Image 4"
                      className={`border-[3px]  w-32 h-32 md:w-40 md:h-52 2xl:w-60 2xl:h-60 object-cover rounded-lg shadow-md 2xl:transform 2xl:rotate-6 ${
                        isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20' 
                      } ease-in-out duration-[4000ms]`}
                    />
                  </div>

                </div>
          </div>
        </div>  
    </div>
  )
}

export default About