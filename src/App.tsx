import { Home, About, Projects, Contact, Navbar } from "./components"

import home from './assets/home.jpg'
function App() {


  return (
    <>
    <Navbar />
    <Home />
    <About />
    <div className="bg-fixed bg-center bg-cover grayscale" style={{backgroundImage: `url(${home})`}}>
         <div className="h-[600px] bg-opcity-75 flex justify-center"></div>
         <Projects />
      </div>
    
    
    <Contact />
    </>
  ) 
}

export default App
