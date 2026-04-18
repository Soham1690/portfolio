import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-[#030412] px-5 pb-6 text-sm text-neutral-400 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>Built with care by Soham Sanyal.</p>

        <div className="flex gap-3">
          {mySocials
            .filter((social) => Boolean(social.href))
            .map((social) => {
              const isGitHub = social.name.toLowerCase() === "github";

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition hover:-translate-y-0.5 hover:bg-white/[0.1]"
                >
                  <img
                    src={social.icon}
                    alt=""
                    loading="lazy"
                    className={`h-5 w-5 transition duration-200 group-hover:scale-110 ${
                      isGitHub
                        ? "brightness-0 invert opacity-90"
                        : "opacity-90"
                    }`}
                  />
                </a>
              );
            })}
        </div>

        <p>© 2026 Soham. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;