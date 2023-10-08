import dev from '../assets/dev.jpg'

const About = () => {
  return (
    <div>
      <div className=" bg-center bg-cover" style={{backgroundImage: `url(${dev})`}}>
        <div className="h-[600px] bg-opcity-75 flex justify-center"></div>
      </div>
    </div>
  )
}

export default About