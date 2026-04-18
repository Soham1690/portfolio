import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experiences";
import Projects from "./sections/Projects";
import Tech from "./components/Tech";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-gradient-to-r from-[#915eff] via-cyan-300 to-white shadow-[0_0_20px_rgba(145,94,255,0.75)]"
    />
  );
};

const SectionReveal = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className="relative">{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 36,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

const SectionDivider = ({ flip = false }) => {
  return (
    <div className="pointer-events-none relative z-20 h-12 overflow-hidden bg-[#030412]">
      <div
        className={`absolute left-1/2 top-1/2 h-[1px] w-[78vw] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent ${
          flip ? "opacity-70" : "opacity-100"
        }`}
      />

      <div className="absolute left-1/2 top-1/2 h-[2px] w-[22vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-[#915eff] to-transparent shadow-[0_0_24px_rgba(145,94,255,0.6)]" />
    </div>
  );
};

const SoftBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(145,94,255,0.08),transparent_26%),radial-gradient(circle_at_90%_20%,rgba(34,211,238,0.06),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(145,94,255,0.06),transparent_34%)]" />

      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:84px_84px]" />
    </div>
  );
};

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030412] text-white">
      <SoftBackground />
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />

          <SectionDivider />

          <SectionReveal>
            <About />
          </SectionReveal>

          <SectionDivider flip />

          <SectionReveal>
            <Experience />
          </SectionReveal>

          <SectionDivider />

          <SectionReveal>
            <Projects />
          </SectionReveal>

          <SectionDivider flip />

          <SectionReveal>
            <Tech />
          </SectionReveal>

          <SectionDivider />

          <SectionReveal>
            <Contact />
          </SectionReveal>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;