import { motion, useMotionValue, useSpring } from "framer-motion";
import { myProjects as baseProjects } from "../constants";
import { useRef } from "react";

const parkinsonProject = {
  id: 999,
  title: "Parkinson Disease Classification using AI/ML",
  description:
    "An ultra-premium clinical-style machine learning web app that predicts Parkinsonian voice-pattern risk using biomedical speech biomarkers, a FastAPI backend, and a deployed Vercel frontend.",
  image:
    "https://plus.unsplash.com/premium_photo-1661767897334-bbfbdfdc4d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
  href: "https://parkinsons-frontend.vercel.app/",
  tags: [
    { id: 101, name: "React" },
    { id: 102, name: "Vite" },
    { id: 103, name: "FastAPI" },
    { id: 104, name: "scikit-learn" },
    { id: 105, name: "AI/ML" },
    { id: 106, name: "Vercel" },
  ],
};

const myProjects = Array.isArray(baseProjects)
  ? baseProjects.length > 0
    ? [baseProjects[0], parkinsonProject, ...baseProjects.slice(1)]
    : [parkinsonProject]
  : [parkinsonProject];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(rawX, { stiffness: 200, damping: 25 });
  const rotateY = useSpring(rawY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const intensity = 18;

    const rotateYValue = ((x / width) - 0.5) * intensity;

    const bottomZone = Math.min((height - y) / (height * 150), 100);
    const verticalFactor = 1 - bottomZone;
    const rotateXValue = Math.pow(verticalFactor, 2) * intensity;

    rawX.set(rotateXValue);
    rawY.set(rotateYValue);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const liveLink =
    project.href ||
    project.link ||
    project.url ||
    (project.title === "E-commerce Platform"
      ? "https://www.soham.buzz/"
      : null);

  return (
    <div className="relative group h-full w-full max-w-[420px]">
      {liveLink && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition duration-300 z-30">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-1 text-sm text-white rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition"
          >
            Visit Site
          </a>

          <div className="w-[2px] h-16 bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)] mt-1" />
        </div>
      )}

      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 2000,
        }}
        className="bg-[#0f0f1a] rounded-xl border border-white/10 shadow-xl hover:shadow-indigo-500/30 transition duration-300 overflow-hidden h-full flex flex-col"
      >
        <div className="overflow-hidden rounded-t-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition duration-400"
          />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-semibold leading-tight min-h-[64px]">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed min-h-[120px] mt-4">
            {project.description}
          </p>

          <div className="flex gap-2 flex-wrap pt-2 min-h-[76px] content-start">
            {project.tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs bg-white/10 px-3 py-1 rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 mt-auto pt-4 text-indigo-400 hover:text-indigo-300 transition"
            >
              Check Live Site →
            </a>
          )}
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

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 max-w-7xl mx-auto [perspective:2000px] place-items-center items-stretch">
        {myProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;