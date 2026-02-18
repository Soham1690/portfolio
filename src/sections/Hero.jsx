import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "../components/Computer.jsx";

const Hero = () => {
  const fullText = "Hi, I'm Soham";
  const secondText = "Full Stack Developer";

  const [displayedText, setDisplayedText] = useState("");
  const [secondDisplayedText, setSecondDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);

        // Start second typing after short delay
        setTimeout(() => {
          let secondIndex = 0;

          const secondInterval = setInterval(() => {
            setSecondDisplayedText(
              secondText.slice(0, secondIndex + 1)
            );
            secondIndex++;

            if (secondIndex === secondText.length) {
              clearInterval(secondInterval);
            }
          }, 70);

        }, 400);
      }
    }, 70);

    return () => clearInterval(interval);
  }, []);

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
          {/* First Typing Heading */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            {displayedText}
            <span className="text-[#915EFF] animate-pulse">|</span>
          </h1>

          {/* Second Typing Line */}
          <h2 className="mt-2 text-[#915EFF] text-2xl sm:text-3xl font-semibold">
            {secondDisplayedText}
          </h2>

          {/* Subtitle appears after first typing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: displayedText.length === fullText.length ? 1 : 0,
              y: displayedText.length === fullText.length ? 0 : 20,
            }}
            transition={{ duration: 0.6 }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            A Developer Dedicated to Crafting{" "}
            <br className="sm:block hidden" />
            Modern & Scalable Web Solutions
          </motion.p>
        </div>
      </div>

      {/* 3D MODEL SECTION */}
      <div className="relative w-full h-[520px] sm:absolute sm:bottom-0 sm:h-[600px] mt-10 sm:mt-0 overflow-hidden">
        <ComputersCanvas />
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
