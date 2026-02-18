import React from "react";

const HeroWaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      
      {/* LEFT WAVE */}
      <svg
        className="absolute left-0 top-0 h-full opacity-30 animate-waveSlow"
        viewBox="0 0 800 800"
        preserveAspectRatio="none"
      >
        <path
          d="M0,400 C200,300 400,500 800,400"
          stroke="#915EFF"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,500 C200,400 400,600 800,500"
          stroke="#915EFF"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* RIGHT WAVE */}
      <svg
        className="absolute right-0 top-0 h-full opacity-30 animate-waveFast"
        viewBox="0 0 800 800"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 C200,200 400,400 800,300"
          stroke="#915EFF"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,450 C200,350 400,550 800,450"
          stroke="#915EFF"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default HeroWaves;
