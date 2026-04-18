import { OrbitingCircles } from "./OrbitingCircles";

const skills = [
  "auth0",
  "cplusplus",
  "css3",
  "dotnet",
  "git",
  "html5",
  "javascript",
  "react",
  "sqlite",
  "tailwindcss",
  "vitejs",
  "wordpress",
];

export function Frameworks() {
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={42} radius={145} speed={1.25}>
        {skills.map((skill) => (
          <Icon key={skill} src={`/assets/logos/${skill}.svg`} name={skill} />
        ))}
      </OrbitingCircles>

      <OrbitingCircles iconSize={28} radius={92} reverse speed={1.7}>
        {[...skills].reverse().map((skill) => (
          <Icon key={`inner-${skill}`} src={`/assets/logos/${skill}.svg`} name={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, name }) => (
  <img
    src={src}
    alt={`${name} logo`}
    loading="lazy"
    className="rounded-lg border border-white/10 bg-white/10 p-1.5 shadow-lg backdrop-blur-md transition duration-200 hover:scale-110"
  />
);