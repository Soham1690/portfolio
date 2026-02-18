import { motion, useMotionValue, useSpring } from "framer-motion";
import { myProjects } from "../constants";
import { useRef } from "react";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(rawX, { stiffness: 200, damping: 25 });
  const rotateY = useSpring(rawY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const intensity = 18;

    // Horizontal tilt (normal)
    const rotateYValue = ((x / width) - 0.5) * intensity;

    // ---- BOTTOM ONLY REACTS ----
    // Only bottom 60% reacts
    const bottomZone = Math.min((height - y) / (height * 150), 100);

    // Invert so bottom reacts more, top almost none
    const verticalFactor = 1 - bottomZone;

    // Stronger bottom hinge feel
    const rotateXValue = Math.pow(verticalFactor, 2) * intensity;

    rawX.set(rotateXValue);
    rawY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div className="relative group">

      {/* Floating Link (does NOT tilt) */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition duration-400 z-30 pointer-events-none">
        <span className="px-4 py-1 text-sm rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-md">
          Link
        </span>

        <div className="w-[2px] h-16 bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)] mt-1" />
      </div>

      {/* TILTING CARD */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 2000,
        }}
        className="bg-[#0f0f1a] rounded-xl border border-white/10 shadow-xl hover:shadow-indigo-500/30 transition duration-300"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition duration-400"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex gap-2 flex-wrap pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs bg-white/10 px-3 py-1 rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>

          <a
            href={project.href || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-indigo-400 hover:text-indigo-300 transition"
          >
            Check Live Site →
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="work"
      className="relative min-h-screen bg-[#050816] text-white py-24 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-20">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-16 max-w-7xl mx-auto [perspective:2000px]">
        {myProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
