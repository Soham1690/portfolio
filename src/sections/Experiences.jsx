import { motion } from "framer-motion";
import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative pl-12 sm:pl-16"
    >
      <div className="absolute left-[0.45rem] top-2 h-5 w-5 rounded-full border border-white/20 bg-[#151727] shadow-[0_0_24px_rgba(145,94,255,0.55)] sm:left-[0.35rem] sm:h-6 sm:w-6">
        <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#915eff]" />
      </div>

      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/25 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-300/35 hover:bg-white/[0.07] sm:p-9 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-purple-500/[0.08] opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="relative z-10">
          <p className="text-base font-semibold text-purple-300/80 sm:text-lg">
            {experience.date}
          </p>

          <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
            {experience.title}
          </h3>

          <p className="mt-3 text-xl font-bold text-white/55 sm:text-2xl">
            {experience.job}
          </p>

          <ul className="mt-8 space-y-4">
            {experience.contents.map((content) => (
              <li
                key={content}
                className="flex gap-4 text-lg leading-8 text-white/68 sm:text-xl sm:leading-9"
              >
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
                <span>{content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experiences = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen w-full overflow-hidden bg-[#030412] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(145,94,255,0.22),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.1),transparent_30%),linear-gradient(180deg,#030412_0%,#050816_100%)]" />

      <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 w-full">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300/80">
          Experience
        </p>

        <h2 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          My Work Experience
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-8 text-white/60 sm:text-xl">
          A timeline of internships, technical training, and hands-on development
          work across backend systems, Salesforce, networking, and production-style
          project building.
        </p>

        <div className="relative mt-16 max-w-6xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-[#915eff] via-white/20 to-transparent sm:left-4" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.title}-${experience.job}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;