import about from '../assets/about.jpg'
import me from '../assets/me.png'

const About = () => {
  return (
    <div>
      <div className="bg-fixed bg-center bg-cover " style={{backgroundImage: `url(${about})`}}>

         

          <div className='lg:grid lg:grid-cols-3'>

              <div className="py-[10%] px-[10%] md:px-[5%] lg:pl-[20%] col-span-2 bg-opcity-75"> 
                <h2 className='pb-[10%] lg:pb-[5%] text-4xl md:text-5xl font-bold'>About Me</h2>
                <p className='text-slate-50 text-xl md:text-3xl leading-tight md:leading-relaxed'>I am a passionate full-stack developer dedicated to creating visually appealing and user-centric web applications. I am eager to contribute my expertise to a dynamic team, fostering continuous learning and professional growth. I firmly believe that pushing our boundaries and embracing challenges with a positive and growth-oriented mindset is the key to honing our skills as developers.</p>
              </div>
          <div className='py-[5%] px-[5%] lg:py-[10%]  md:px-[5%] lg:pr-[20%] w-[65%]  lg:w-[100%] xl:w-[75%] m-auto flex justify-self-center items-center'>
              <img className='grayscale hover:opacity-80' src='https://www.shutterstock.com/shutterstock/photos/373244104/display_1500/stock-vector-insert-profile-picture-sign-absence-of-image-373244104.jpg' alt="" />
          </div>
          </div>
        </div>  
    </div>
  )
}

export default About