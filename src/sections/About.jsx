import { useRef } from "react";
import Card from "../components/Card";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const RemoteBadge = () => (
  <div className="relative flex h-full min-h-[13rem] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#080b20]">
    <div className="absolute h-56 w-56 rounded-full border border-cyan-300/25" />
    <div className="absolute h-36 w-36 rounded-full border border-purple-300/25" />
    <div className="absolute h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/40 to-cyan-400/30 blur-xl" />

    <div className="relative z-10 rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-5 text-center backdrop-blur-md">
      <p className="text-xs uppercase tracking-[0.35em] text-white/50">Based in</p>
      <p className="mt-1 text-3xl font-black text-white">India</p>
      <p className="mt-2 text-sm text-white/60">Open to remote opportunities</p>
    </div>
  </div>
);

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden bg-[#030412] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(145,94,255,0.24),transparent_30%),radial-gradient(circle_at_86%_20%,rgba(34,211,238,0.12),transparent_28%),linear-gradient(180deg,#030412_0%,#050816_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 w-full">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300/80">
          About
        </p>

        <h2 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl xl:text-6xl">
          Building clean, reliable digital products.
        </h2>

        <div className="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[20rem] xl:auto-rows-[22rem]">
          <div className="grid-default-color grid-1 flex items-end">
            <img
              src="/assets/coding-pov.png"
              alt="Developer workspace illustration"
              loading="lazy"
              className="absolute -right-[5rem] -top-[1rem] scale-[1.75] opacity-80 md:inset-y-10 md:left-20 md:scale-[3] lg:scale-[2.5]"
            />

            <div className="relative z-10 max-w-lg">
              <p className="headtext">Hi, I&apos;m Soham Sanyal</p>
              <p className="subtext">
                I build responsive web applications with a strong focus on clean
                interfaces, reusable components and practical backend logic.
              </p>
            </div>

            <div className="absolute inset-x-0 -bottom-4 h-1/2 bg-gradient-to-t from-indigo to-transparent sm:h-1/3" />
          </div>

          <div className="grid-default-color grid-2">
            <div
              ref={grid2Container}
              className="flex h-full w-full items-center justify-center overflow-hidden"
            >
              <p className="text-center text-5xl font-black text-white/10 sm:text-6xl">
                CODE IS CRAFT
              </p>

              <Card
                style={{ rotate: "75deg", top: "30%", left: "20%" }}
                text="OOP"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="React"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="APIs"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="Java"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="UI/UX"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "30deg", top: "70%", left: "70%" }}
                image="/assets/logos/react.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                image="/assets/logos/git.svg"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                image="/assets/logos/tailwindcss.svg"
                containerRef={grid2Container}
              />
            </div>
          </div>

          <div className="grid-black-color grid-3">
            <div className="relative z-10 w-full md:w-[52%]">
              <p className="headtext">Location & availability</p>
              <p className="subtext">
                Based in India and comfortable collaborating with distributed
                teams across time zones.
              </p>
            </div>

            <div className="absolute bottom-4 right-4 top-4 w-[58%] max-md:opacity-45">
              <RemoteBadge />
            </div>
          </div>

          <div className="grid-special-color grid-4">
            <div className="flex size-full flex-col items-center justify-center gap-5">
              <p className="headtext text-center">Want to build something together?</p>
              <CopyEmailButton />
            </div>
          </div>

          <div className="grid-default-color grid-5">
            <div className="relative z-10 w-full md:w-[48%]">
              <p className="headtext">Tech Stack</p>
              <p className="subtext">
                I work with frontend, backend, CRM and database tools to build
                practical, scalable and polished applications.
              </p>
            </div>

            <div className="absolute inset-y-0 start-[45%] h-full w-full md:inset-y-9 md:scale-125">
              <Frameworks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;