import { motion } from "framer-motion";

const Card = ({ style, text, image, containerRef }) => {
  if (image && !text) {
    return (
      <motion.img
        className="absolute w-16 cursor-grab rounded-xl border border-white/10 bg-white/10 p-2 shadow-xl backdrop-blur-md"
        src={image}
        alt="Technology badge"
        style={style}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={containerRef}
        dragElastic={0.7}
        loading="lazy"
      />
    );
  }

  return (
    <motion.div
      className="absolute w-44 cursor-grab rounded-full border border-white/10 bg-storm/90 px-4 py-3 text-center text-base font-semibold text-white/80 shadow-xl backdrop-blur-md ring-1 ring-white/10"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.7}
    >
      {text}
    </motion.div>
  );
};

export default Card;