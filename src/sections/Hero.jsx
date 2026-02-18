import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "../components/Computer.jsx";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/my-bg.png.png')" }}
    >
      {/* LEFT TEXT CONTENT */}
      <div
        className={`absolute left-0 right-0 max-w-7xl mx-auto ${styles.paddingX} mt-10 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Soham</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Developer Dedicated to Crafting{" "}
            <br className="sm:block hidden" />
            Modern & Scalable Web Solutions
          </p>
        </div>
      </div>

      {/* 3D MODEL SECTION - RESPONSIVE FIX */}
      <div className="relative w-full h-[420px] sm:absolute sm:bottom-0 sm:h-[600px] mt-8 sm:mt-0 overflow-visible">
  <div className="w-full h-full scale-90 sm:scale-100 origin-center">
    <ComputersCanvas />
  </div>
</div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
