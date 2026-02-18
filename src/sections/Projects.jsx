import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 15, stiffness: 100 });
  const springY = useSpring(y, { damping: 15, stiffness: 100 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="work"
    >
      <h2 className="text-heading">My Selected Projects</h2>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12" />

      {myProjects.map((project) => (
        <Project
          key={project.id}
          {...project}
          setPreview={setPreview}
        />
      ))}

      {preview && (
        <motion.img
          src={preview}
          alt="Project preview"
          className="fixed top-0 left-0 z-50 w-80 h-56 object-cover rounded-lg shadow-lg pointer-events-none"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </section>
  );
};

export default Projects;
