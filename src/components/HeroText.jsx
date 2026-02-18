import { motion } from "framer-motion";
import { FlipWords } from "./FlipWords";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative z-10 flex flex-col justify-center h-screen max-w-2xl text-left">
      
      <motion.p
        className="text-lg text-neutral-400"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        Hi I'm Soham
      </motion.p>

      <motion.h1
        className="text-5xl font-semibold md:text-7xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        A Developer
      </motion.h1>

      <motion.h2
        className="text-4xl font-medium text-neutral-300 md:text-6xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        Dedicated to Crafting
      </motion.h2>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <FlipWords
          words={words}
          className="text-6xl font-extrabold text-white md:text-8xl"
        />
      </motion.div>

      <motion.p
        className="mt-2 text-2xl text-neutral-400 md:text-3xl"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        Development Solutions
      </motion.p>

    </div>
  );
};

export default HeroText;