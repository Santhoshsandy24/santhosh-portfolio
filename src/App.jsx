import "./app.scss"

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Cursor from "./components/Cursor/Cursor";

const App = () => {
  return <div>
    <Cursor/>
  <section id="HomePage">
    <Navbar/>
   <Hero/> 
  </section>
   <section id="services"><Parallax/></section> 
    
   <section id="Protfolio"><Portfolio/></section>
    


  </div>;
};

export default App;
