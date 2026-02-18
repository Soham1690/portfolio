import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experiences";
import Contact from "./sections/Contact";
import StarsCanvas from "./components/StarsCanvas";
import Projects from "./sections/Projects";
import Tech from "./components/Tech";





function App() {
  return (
    <div className="relative z-0 bg-[#050816]">
      {/* Stars Background */}
       <div className="relative z-0 bg-[#050816] overflow-x-hidden"></div>

      {/* Main Sections */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects/>
      <Tech />
      <Contact />
      

      
      

      
    </div>
  );
}

export default App;
