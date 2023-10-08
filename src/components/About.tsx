import about from '../assets/about.jpg'

const About = () => {
  return (
    <div>
      <div className="bg-fixed bg-center bg-cover" style={{backgroundImage: `url(${about})`}}>
        <div className="h-screen bg-opcity-75 flex justify-center"></div>
      </div>
    </div>
  )
}

export default About