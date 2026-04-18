import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import nodejs from "../assets/tech/nodejs.png";
import mysql from "../assets/tech/mysql.png";
import tailwind from "../assets/tech/tailwind.png";
import python from "../assets/tech/python.png";
import cisco from "../assets/tech/cisco.png";
import git from "../assets/tech/git.png";
import salesforce from "../assets/tech/salesforce.png";
import java from "../assets/tech/java.png";

const technologies = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "ReactJS", icon: reactjs },
  { name: "NodeJS", icon: nodejs },
  { name: "Salesforce", icon: salesforce },
  { name: "Tailwind", icon: tailwind },
  { name: "Java", icon: java },
  { name: "Cisco", icon: cisco },
  { name: "Python", icon: python },
  { name: "Git", icon: git },
  { name: "MySQL", icon: mysql },
];

const Tech = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300/80">
            Skills
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Tools I use to ship real projects
          </h2>
          <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg">
            A lightweight, mobile-safe stack section. No heavy WebGL canvases,
            no blank Android boxes, just clean visual proof of the tech I use.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-white/[0.075]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/10 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/25 p-3 shadow-inner shadow-white/5">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    loading="lazy"
                    className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-semibold text-white/80">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;