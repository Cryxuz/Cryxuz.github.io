import about from '../assets/about.jpg'

const About = () => {
  return (
    <div>
      <div className="bg-fixed bg-center bg-cover grid grid-cols-2" style={{backgroundImage: `url(${about})`}}>
        <p className='text-slate-50 p-[10%] text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt non voluptate eius consequuntur alias minus eligendi quidem vel, dicta placeat id dolorum perferendis, necessitatibus quod sint in voluptas eos laboriosam!
        Soluta iure molestias, officia cumque sequi repudiandae odit perspiciatis delectus beatae sapiente ullam harum nam voluptatum odio neque recusandae veniam. Quam veritatis eveniet ducimus voluptas quae nihil quaerat ullam quos?
        Assumenda, ipsam incidunt. Repudiandae, eos laboriosam doloribus porro facilis at quidem. Sequi, aliquam repudiandae odio quasi, ab dignissimos dolore explicabo recusandae expedita mollitia repellendus, impedit dolores! Aliquid ullam repellendus perferendis?</p>
        <div className="h-screen bg-opcity-75 flex justify-center"></div>
      </div>
    </div>
  )
}

export default About