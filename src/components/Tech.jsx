import React from "react";
import BallCanvas from "./Ball";

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
  { name: "Mysql", icon: mysql },
];

const Tech = () => {
  const topRow = technologies.slice(0, 7);
  const bottomRow = technologies.slice(7);

  return (
    <section className="py-28 flex flex-col items-center space-y-16">
      
      {/* Top Row */}
      <div className="flex justify-center gap-14 flex-wrap">
        {topRow.map((tech) => (
          <div
            key={tech.name}
            className="w-28 h-28 transition-transform duration-300 hover:scale-110"
          >
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center gap-14 flex-wrap">
        {bottomRow.map((tech) => (
          <div
            key={tech.name}
            className="w-28 h-28 transition-transform duration-300 hover:scale-110"
          >
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Tech;
