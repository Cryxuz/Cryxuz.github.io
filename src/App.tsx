import { Home, About, Projects, Contact, Navbar } from "./components"


function App() {


  return (
    <div className="text-slate-50">
    <Navbar />
    <Home /> 
    <Projects />
    <About />
    <Contact />
    </div>
  ) 
}

export default App
