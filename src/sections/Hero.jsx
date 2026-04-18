import { styles } from "../styles";

const stackItems = ["React", "Java", "FastAPI", "Salesforce", "AI/ML", "Vercel"];

const codeLines = [
  "const developer = {",
  '  name: "Soham Sanyal",',
  '  role: "Full Stack Developer",',
  '  focus: "Premium Web Experiences",',
  '  status: "Resume Ready",',
  "};",
];

const HeroVisual = () => {
  return (
    <div className="relative hidden min-h-[34rem] w-full items-center justify-center lg:flex">
      <div className="pointer-events-none absolute h-[28rem] w-[28rem] rounded-full bg-[#915eff]/16 blur-[110px]" />
      <div className="pointer-events-none absolute right-8 top-20 h-72 w-72 rounded-full bg-cyan-300/8 blur-[100px]" />

      <div className="relative w-full max-w-[42rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b1d]/88 shadow-2xl shadow-black/45">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-[#915eff]/10" />

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
                <div key={line} className="grid grid-cols-[2rem_1fr] gap-4">
                  <span className="select-none text-white/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={
                      line.includes("const")
                        ? "text-cyan-200"
                        : line.includes('"')
                        ? "text-emerald-300"
                        : "text-white/75"
                    }
                  >
                    {line}
                  </span>
                </div>
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
                    className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-bold text-white/70 transition hover:border-cyan-200/30 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-[#915eff] via-cyan-300 to-transparent" />
            </div>
          </main>
        </div>
      </div>

      <div className="absolute bottom-14 right-20 rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 shadow-2xl shadow-black/30">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
          Build
        </p>
        <p className="mt-1 text-sm font-bold text-emerald-300">
          Production Ready
        </p>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#02030d] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.28), rgba(0,0,0,0.1)), url('/my-bg.png.png')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_16%_20%,rgba(145,94,255,0.18),transparent_28%),radial-gradient(circle_at_82%_32%,rgba(34,211,238,0.12),transparent_32%)]" />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-[#02030d]/75" />

      <div className="relative z-20 mx-auto grid min-h-[100svh] w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-28 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
        <div className="flex flex-row items-start gap-5">
          <div className="mt-2 flex origin-top flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915EFF] shadow-[0_0_24px_rgba(145,94,255,0.75)]" />
            <div className="violet-gradient h-40 w-1 sm:h-72" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m Soham
            </h1>

            <h2 className="mt-2 text-2xl font-semibold text-[#915EFF] sm:text-3xl">
              Full Stack Developer
            </h2>

            <p className={`${styles.heroSubText} mt-4 max-w-[43rem] text-white-100`}>
              A Developer Dedicated to Crafting{" "}
              <br className="hidden sm:block" />
              Modern & Scalable Web Solutions
            </p>

            <div className="pointer-events-auto mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#050816] shadow-xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.12]"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>

      <div className="absolute bottom-6 z-40 flex w-full items-center justify-center">
        <a href="#about" aria-label="Scroll to about section">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <div className="mb-1 h-3 w-3 rounded-full bg-secondary" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;