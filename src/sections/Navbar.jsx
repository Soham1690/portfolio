import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#030412]/70 text-white backdrop-blur-xl">
      <div className="flex w-full items-center justify-between px-6 py-4 sm:px-10 md:px-14 lg:px-20 xl:px-28 2xl:px-36">
        <a href="#home" className="text-lg font-black tracking-tight text-white">
          Soham
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-white/70 transition duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-bold text-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-white/10 bg-[#030412]/95 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="block rounded-2xl px-4 py-3 text-white/70 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;