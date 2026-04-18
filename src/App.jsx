import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experiences";
import Projects from "./sections/Projects";
import Tech from "./components/Tech";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const SectionDivider = () => {
  return (
    <div className="pointer-events-none relative z-20 h-10 overflow-hidden bg-[#030412]">
      <div className="absolute left-1/2 top-1/2 h-[1px] w-[78vw] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="absolute left-1/2 top-1/2 h-[2px] w-[20vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-[#915eff] to-transparent shadow-[0_0_20px_rgba(145,94,255,0.45)]" />
    </div>
  );
};

const SoftBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(145,94,255,0.06),transparent_26%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.045),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(145,94,255,0.045),transparent_34%)]" />

      <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:84px_84px]" />
    </div>
  );
};

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030412] text-white">
      <SoftBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          <SectionDivider />

          <About />

          <SectionDivider />

          <Experience />

          <SectionDivider />

          <Projects />

          <SectionDivider />

          <Tech />

          <SectionDivider />

          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;