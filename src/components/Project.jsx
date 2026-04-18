import { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription = [],
  href = "",
  image,
  tags = [],
  setPreview,
  index = 0,
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (setPreview && image) {
      setPreview(image);
    }
  };

  const handleMouseLeave = () => {
    if (setPreview) {
      setPreview(null);
    }
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          delay: index * 0.06,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.16 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative flex min-h-[39rem] w-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#10111d] shadow-2xl shadow-black/35 transition duration-300 hover:-translate-y-2 hover:border-purple-300/40 hover:bg-[#151727]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-purple-500/[0.08] opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="relative h-[17.5rem] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#10111d] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col px-8 pb-8 pt-8">
          <h3 className="text-[1.7rem] font-black leading-tight tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-8 text-[1.08rem] leading-8 text-white/58">
            {description}
          </p>

          {subDescription.length > 0 && (
            <ul className="mt-5 grid gap-2 text-sm leading-6 text-white/50">
              {subDescription.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag.id || tag.name}
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

          <div className="mt-auto flex items-center justify-between gap-4 pt-9">
            {href ? (
              <a
                href={href}
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

            <button
              type="button"
              onClick={() => setIsDetailsOpen(true)}
              className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-bold text-white/75 transition hover:-translate-y-0.5 hover:bg-white/[0.14] hover:text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </motion.article>

      {isDetailsOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsDetailsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;