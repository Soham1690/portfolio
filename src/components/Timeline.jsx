"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="c-space section-spacing">
      <h2 className="text-heading mb-20">My Work Experience</h2>

      <div className="relative">

        {/* Vertical Base Line */}
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-neutral-700" />

        {/* Animated Line */}
        <motion.div
          style={{ height: heightTransform }}
          className="absolute left-5 top-0 w-[2px] bg-gradient-to-b from-purple-500 via-purple-400 to-transparent rounded-full"
        />

        {data.map((item, index) => (
          <div key={index} className="relative pl-16 pb-16">

            {/* Dot */}
            <div className="absolute left-[13px] top-2 w-4 h-4 rounded-full bg-neutral-800 border border-neutral-500" />

            {/* Content */}
            <div className="space-y-3">
              <p className="text-sm text-neutral-400">
                {item.date}
              </p>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-neutral-500 font-medium">
                {item.job}
              </p>

              <div className="space-y-2 pt-3">
                {item.contents.map((content, i) => (
                  <p key={i} className="text-neutral-400 leading-relaxed">
                    {content}
                  </p>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};
