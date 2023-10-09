import About from "./components/About"
import Contact from "./components/Contact"
import  Home from "./components/Home"
import Projects from "./components/Projects"


function App() {


  return (
    <div className="text-slate-50">
    
    <Home /> 
    <div id="about"><About /></div>
    <div id="projects"><Projects /></div>
    <div id="contact"><Contact /></div>
    </div>
  ) 
}

export default App
