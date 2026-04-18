import { motion, useReducedMotion } from "framer-motion";
import { styles } from "../styles";

const stackItems = ["React", "Java", "FastAPI", "Salesforce", "AI/ML", "Vercel"];

const codeLines = [
  { number: "01", code: "const developer = {" },
  { number: "02", code: '  name: "Soham Sanyal",' },
  { number: "03", code: '  role: "Full Stack Developer",' },
  { number: "04", code: '  focus: "Premium Web Experiences",' },
  { number: "05", code: '  status: "Resume Ready",' },
  { number: "06", code: "};" },
];

const HeroVisual = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.18,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative hidden min-h-[34rem] w-full items-center justify-center lg:flex"
    >
      <div className="absolute h-[30rem] w-[30rem] rounded-full bg-[#915eff]/20 blur-[130px]" />
      <div className="absolute right-8 top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-[110px]" />

      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, -14, 0],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full max-w-[42rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b1d]/80 shadow-2xl shadow-black/50 backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[#915eff]/10" />

        <div className="relative z-10 flex h-12 items-center gap-2 border-b border-white/10 px-5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />

          <span className="ml-auto rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/55">
            portfolio.jsx
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-[0.32fr_1fr]">
          <aside className="border-r border-white/10 bg-black/25 p-5">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-white/35">
              Explorer
            </p>

            {["src", "components", "sections", "projects", "contact"].map(
              (item, index) => (
                <div
                  key={item}
                  className="mb-4 flex items-center gap-3 text-sm font-semibold text-white/52"
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      index % 2 === 0 ? "bg-cyan-300" : "bg-[#915eff]"
                    }`}
                  />
                  {item}
                </div>
              )
            )}
          </aside>

          <main className="p-6">
            <div className="space-y-3 font-mono text-sm leading-7">
              {codeLines.map((line, index) => (
                <motion.div
                  key={line.number}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.35 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="grid grid-cols-[2rem_1fr] gap-4"
                >
                  <span className="select-none text-white/25">{line.number}</span>
                  <span
                    className={
                      line.code.includes("const")
                        ? "text-cyan-200"
                        : line.code.includes('"')
                        ? "text-emerald-300"
                        : "text-white/75"
                    }
                  >
                    {line.code}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/35">
                  Tech Stack
                </p>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  Available
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {stackItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-bold text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
              />
            </div>
          </main>
        </div>
      </motion.div>

      <motion.div
        animate={
          prefersReducedMotion
            ? {}
            : {
                y: [0, 16, 0],
                opacity: [0.5, 1, 0.5],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-14 right-20 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
          Build
        </p>
        <p className="mt-1 text-sm font-bold text-emerald-300">Production Ready</p>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#02030d] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.26), rgba(0,0,0,0.08)), url('/my-bg.png.png')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_16%_20%,rgba(145,94,255,0.18),transparent_28%),radial-gradient(circle_at_82%_32%,rgba(34,211,238,0.12),transparent_32%)]" />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#02030d]/75" />

      <div className="relative z-20 mx-auto grid min-h-[100svh] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-28 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <div className="flex flex-row items-start gap-5">
          <motion.div
            initial={{ opacity: 0, scaleY: 0.4 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 flex origin-top flex-col items-center justify-center"
          >
            <div className="h-5 w-5 rounded-full bg-[#915EFF] shadow-[0_0_30px_rgba(145,94,255,0.9)]" />
            <div className="violet-gradient h-40 w-1 sm:h-72" />
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${styles.heroHeadText} text-white`}
            >
              Hi, I&apos;m Soham
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.42,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-2xl font-semibold text-[#915EFF] sm:text-3xl"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.46,
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${styles.heroSubText} mt-4 max-w-[43rem] text-white-100`}
            >
              A Developer Dedicated to Crafting{" "}
              <br className="hidden sm:block" />
              Modern & Scalable Web Solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-auto mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#050816] shadow-xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/[0.12]"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="absolute bottom-6 z-40 flex w-full items-center justify-center">
        <a href="#about" aria-label="Scroll to about section">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;