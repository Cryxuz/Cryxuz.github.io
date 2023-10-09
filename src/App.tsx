import { Home, About, Projects, Contact } from "./components"


function App() {


  return (
    <div className="text-slate-50">
    
    <div id="home"><Home /> </div>
    <div id="about"><About /></div>
    <div id="projects"><Projects /></div>
    <div id="contact"><Contact /></div>
    </div>
  ) 
}

export default App
