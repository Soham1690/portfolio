import { motion } from "framer-motion";
import { myProjects } from "../constants";

const getProjectLink = (project) => {
  return (
    project.href ||
    project.link ||
    project.url ||
    (project.title === "E-commerce Platform" ? "https://www.soham.buzz/" : "")
  );
};

const ProjectCard = ({ project, index }) => {
  const projectLink = getProjectLink(project);

  return (
    <motion.article
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.16 }}
      className="group relative flex min-h-[39rem] w-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#10111d] shadow-2xl shadow-black/35 transition duration-300 hover:-translate-y-2 hover:border-purple-300/40 hover:bg-[#151727]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-purple-500/[0.08] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative h-[17.5rem] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#10111d] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-8 pb-8 pt-8">
        <h3 className="text-[1.7rem] font-black leading-tight tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-8 text-[1.08rem] leading-8 text-white/58">
          {project.description}
        </p>

        {project.subDescription?.length > 0 && (
          <ul className="mt-5 grid gap-2 text-sm leading-6 text-white/50">
            {project.subDescription.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={`${project.id}-${tag.id || tag.name}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white/75"
            >
              {tag.path && (
                <img
                  src={tag.path}
                  alt=""
                  loading="lazy"
                  className="h-4 w-4 object-contain"
                />
              )}
              {tag.name}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-9">
          {projectLink ? (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-bold text-white transition hover:text-cyan-200"
            >
              Check Live Site
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          ) : (
            <span className="text-sm font-semibold text-white/35">
              Live link coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section
      id="work"
      className="relative min-h-screen overflow-hidden bg-[#050816] py-24 text-white"
      style={{
        width: "100vw",
        maxWidth: "100vw",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(145,94,255,0.16),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(34,211,238,0.09),transparent_30%),linear-gradient(180deg,#050816_0%,#030412_100%)]" />

      <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div
        className="relative z-10 w-full"
        style={{
          paddingLeft: "clamp(4.5rem, 7vw, 8.5rem)",
          paddingRight: "clamp(4.5rem, 7vw, 8.5rem)",
        }}
      >
        <h2 className="text-center text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-[5.4rem]">
          My Projects
        </h2>

        <div
          className="mt-20 grid w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{
            gap: "clamp(3rem, 4.4vw, 5.5rem)",
          }}
        >
          {myProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;