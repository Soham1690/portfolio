import { mySocials } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4" />

      {/* Legal Links */}
      <div className="flex gap-2">
        <p className="cursor-pointer hover:text-white transition-colors">
          Terms & Conditions
        </p>
        <p>|</p>
        <p className="cursor-pointer hover:text-white transition-colors">
          Privacy Policy
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        {mySocials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-5 h-5"
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p>© 2025 Soham. All rights reserved.</p>

    </section>
  );
};

export default Footer;
